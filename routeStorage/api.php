<?php
// chown -R www-data:www-data /var/www/html/routeStorage/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$db = new PDO("sqlite:database.sqlite");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->exec("
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);
");

$db->exec("
CREATE TABLE IF NOT EXISTS uploads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    item_name TEXT NOT NULL,
    item_text TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    is_public INTEGER NOT NULL DEFAULT 0
);
");

$SECRET = "CHANGE_THIS_TO_A_LONG_RANDOM_SECRET";

/* ---------------- TOKEN HELPERS ---------------- */

function create_token($username, $secret) {
    $payload = base64_encode(json_encode([
        "username" => $username,
        "exp" => time() + 86400
    ]));
    $sig = hash_hmac("sha256", $payload, $secret);
    return $payload . "." . $sig;
}

function verify_token($token, $secret) {
    if (!str_contains($token, ".")) return false;

    list($payload, $sig) = explode(".", $token, 2);

    if (hash_hmac("sha256", $payload, $secret) !== $sig) return false;

    $data = json_decode(base64_decode($payload), true);
    if (!$data || $data["exp"] < time()) return false;

    return $data["username"];
}

function require_user($input, $secret) {
    if (!isset($input["token"])) respond(["error" => "Missing token"]);
    $username = verify_token($input["token"], $secret);
    if (!$username) respond(["error" => "Invalid or expired token"]);
    return $username;
}

function respond($data) {
    echo json_encode($data);
    exit;
}

/* ---------------- INPUT ---------------- */

$input = json_decode(file_get_contents("php://input"), true);
$action = $input["action"] ?? "";

/* ---------------- ACTIONS ---------------- */

switch ($action) {

    case "login":
        $u = $input["username"];
        $p = $input["password"];

        $stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->execute([$u]);
        $user = $stmt->fetch();

        if (!$user) {
            $stmt = $db->prepare("INSERT INTO users (username, password_hash) VALUES (?, ?)");
            $stmt->execute([$u, password_hash($p, PASSWORD_DEFAULT)]);
        } else if (!password_verify($p, $user["password_hash"])) {
            respond(["success" => false, "error" => "Wrong password"]);
        }

        $token = create_token($u, $SECRET);
        respond(["success" => true, "token" => $token, "username" => $u]);

    case "change_password":
        $username = require_user($input, $SECRET);

        $old = $input["old_password"] ?? "";
        $new = $input["new_password"] ?? "";

        // Fetch user
        $stmt = $db->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) respond(["error" => "User not found"]);

        // Verify old password
        if (!password_verify($old, $user["password_hash"])) {
            respond(["error" => "Old password is incorrect"]);
        }

        // Update password
        $stmt = $db->prepare("UPDATE users SET password_hash = ? WHERE username = ?");
        $stmt->execute([password_hash($new, PASSWORD_DEFAULT), $username]);

        respond(["success" => true]);

    case "upload":
        $username = require_user($input, $SECRET);

        $stmt = $db->prepare("
            INSERT INTO uploads (username, item_name, item_text, created_at)
            VALUES (?, ?, ?, ?)
        ");
        $stmt->execute([
            $username,
            $input["name"],
            $input["text"],
            (int)(microtime(true) * 1000)   // same format as Date.now()
        ]);

        respond(["success" => true]);

    case "update_item":
        $username = require_user($input, $SECRET);

        $id = $input["id"] ?? 0;
        $new_name = $input["name"] ?? "";
        $new_text = $input["text"] ?? "";

        // Fetch item
        $stmt = $db->prepare("SELECT * FROM uploads WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) respond(["error" => "Not found"]);
        if ($row["username"] !== $username) respond(["error" => "Not allowed"]);

        // Update
        $stmt = $db->prepare("
            UPDATE uploads
            SET item_name = ?, item_text = ?, created_at = ?
            WHERE id = ? AND username = ?
        ");
        $stmt->execute([$new_name, $new_text, (int)(microtime(true) * 1000), $id, $username]);

        respond(["success" => true]);

    case "make_public":
        $username = require_user($input, $SECRET);
        $stmt = $db->prepare("UPDATE uploads SET is_public = 1 WHERE id = ? AND username = ?");
        $stmt->execute([$input["id"], $username]);
        respond(["success" => true]);

    case "make_private":
        $username = require_user($input, $SECRET);
        $stmt = $db->prepare("UPDATE uploads SET is_public = 0 WHERE id = ? AND username = ?");
        $stmt->execute([$input["id"], $username]);
        respond(["success" => true]);

    case "delete_upload":
        $username = require_user($input, $SECRET);
        $stmt = $db->prepare("DELETE FROM uploads WHERE id = ? AND username = ?");
        $stmt->execute([$input["id"], $username]);
        respond(["success" => true]);

    case "delete_user":
        $username = require_user($input, $SECRET);
        $db->prepare("DELETE FROM uploads WHERE username = ?")->execute([$username]);
        $db->prepare("DELETE FROM users WHERE username = ?")->execute([$username]);
        respond(["success" => true]);

    case "list":
        $token = $input["token"] ?? null;
        $username = $token ? verify_token($token, $SECRET) : null;

        if ($username) {
            // Logged in → return public + private metadata
            $stmt = $db->prepare("
                SELECT id, username, item_name, created_at, is_public
                FROM uploads
                WHERE is_public = 1 OR username = ?
                ORDER BY item_name
            ");
            $stmt->execute([$username]);
        } else {
            // Anonymous → only public metadata
            $stmt = $db->prepare("
                SELECT id, username, item_name, created_at, is_public
                FROM uploads
                WHERE is_public = 1
                ORDER BY item_name
            ");
            $stmt->execute();
        }

        respond(["uploads" => $stmt->fetchAll(PDO::FETCH_ASSOC)]);

    case "get_item":
        $id = $input["id"] ?? 0;
        $token = $input["token"] ?? null;
        $username = $token ? verify_token($token, $SECRET) : null;

        // Fetch item by ID
        $stmt = $db->prepare("SELECT * FROM uploads WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row) respond(["error" => "Not found"]);

        // Permission check
        if ($row["is_public"] == 0 && $row["username"] !== $username) {
            respond(["error" => "Not allowed"]);
        }

        respond(["item" => $row]);
}

respond(["error" => "Invalid action"]);
