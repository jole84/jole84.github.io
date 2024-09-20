<?php
// php --server localhost:8080/locationHandler.php
// sudo chown -R www-data /var/www/html/locationHandler
// ?q={"timeStamp":1725555864869,"userName":"Test user","coords":[1601556.5673312724,8264789.643593338],"heading":1,"speed":55}

$q = $_REQUEST["q"]; // load data from current user
$qAsArray = json_decode($q, true);

$filename = 'locationData.json';
$maxAgeMS = 10800000; // 3 hour * 60 minutes * 60 seconds * 1000 milliseconds
$merged = []; // array to merge users data

// loads the json file and converts to array
$loadedFile = file_get_contents($filename);
$loadedFileAsArray = json_decode($loadedFile, true);

// loops through users from loaded file
foreach ($loadedFileAsArray as $x) {
    if ($x["userName"] != $qAsArray["userName"]) { // add other users to array
        if ((microtime(true) * 1000) - $x["timeStamp"] < $maxAgeMS) {// checks age of user data
            $merged[] = $x;
        }
    }
}
// and then adds current user
if (!!$qAsArray) {
    $merged[] = $qAsArray;
}

// save json file
file_put_contents($filename, json_encode($merged));

// return data to html document
echo json_encode($merged);
?>