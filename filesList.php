<?php
header('Content-Type: application/json');
$filesList = glob("rutter/*.{gpx,kml,geojson}", GLOB_BRACE);

foreach ($filesList as $k=>$v) {
    $filesList[$k] = str_replace("rutter/", "", $v);
}

echo json_encode($filesList);