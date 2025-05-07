<?php
// Create a DSN for the database using its filename
$fileName = "db.sqlite";
$dsn = "sqlite:$fileName";
$maxAgeMS = 10800000; // 3 hour * 60 minutes * 60 seconds * 1000 milliseconds

function connectToDatabase(string $dsn): object
{
    try {
        $db = new PDO($dsn);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo "Failed to connect to the database using DSN:<br>'$dsn'<br>";
        throw $e;
    }

    return $db;
}

$db = connectToDatabase($dsn);

// ----------------------create--------------------
$sqlcreate = <<<SQL
    CREATE TABLE  IF NOT EXISTS "locationData" (
    "userName"	TEXT NOT NULL,
    "timeStamp"	INTEGER NOT NULL,
    "x"         INTEGER,
    "y"         INTEGER,
    "heading"   INTEGER,
    "accuracy"  INTEGER,
    "speed"     INTEGER,
    PRIMARY KEY("userName")
)
SQL;
$stmt = $db->prepare($sqlcreate);
$stmt->execute();

// ----------------------insert or update--------------------
if (!!$_POST["userName"]) {
    $userName = $_POST["userName"];
    $timeStamp = $_POST["timeStamp"];
    $x = $_POST["x"];
    $y = $_POST["y"];
    $heading = $_POST["heading"];
    $accuracy = $_POST["accuracy"];
    $speed = $_POST["speed"];
    
    $sqlinsert = <<<SQL
    INSERT or REPLACE INTO 
    locationData(userName, timeStamp, x, y, heading, accuracy, speed) 
    VALUES ('$userName', $timeStamp, $x, $y, $heading, $accuracy, $speed);
SQL;

    $stmt = $db->prepare($sqlinsert);
    $stmt->execute();
}

// ----------------------delete--------------------
$currenttime = microtime(true) * 1000;
$sqldelete = <<<SQL
    DELETE FROM locationData
    WHERE $currenttime - timeStamp > $maxAgeMS;
SQL;

$stmt = $db->prepare($sqldelete);
$stmt->execute();

// ----------------------read--------------------
$sqlread = <<<SQL
    select * from locationData;
SQL;

$stmt = $db->prepare($sqlread);
$stmt->execute();

$res = $stmt->fetchAll();
header('Content-Type: application/json');
echo json_encode($res);
