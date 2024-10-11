<?php
// http://localhost:8080/sql-location-handler.php?q={%22timeStamp%22:1727377794278,%22userName%22:%22Test%20user2%22,%22coords%22:[1601556.5673312724,8264789.643593338],%22heading%22:1,%22accuracy%22:10,%22speed%22:55}
// Create a DSN for the database using its filename
$fileName = "db.sqlite";
$dsn = "sqlite:$fileName";
$q = $_REQUEST["q"]; // load data from current user
$qAsArray = json_decode($q, true);
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
    "coords"	TEXT,
    "heading"   INTEGER,
    "accuracy"  INTEGER,
    "speed"     INTEGER,
    PRIMARY KEY("userName")
)
SQL;
$stmt = $db->prepare($sqlcreate);
$stmt->execute();

// ----------------------insert or update--------------------
if (!!$qAsArray) {
    $userName = $qAsArray["userName"];
    $timeStamp = $qAsArray["timeStamp"];
    $coords = json_encode($qAsArray["coords"]);
    $heading = $qAsArray["heading"];
    $accuracy = $qAsArray["accuracy"];
    $speed = $qAsArray["speed"];
    
    $sqlinsert = <<<SQL
    INSERT or REPLACE INTO 
    locationData(userName, timeStamp, coords, heading, accuracy, speed) 
    VALUES ('$userName', $timeStamp, '$coords', $heading, $accuracy, $speed);
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
foreach ($res as &$row) {
    $row["coords"] = json_decode($row["coords"], true);
}
echo json_encode($res);
