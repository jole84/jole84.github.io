<?php
header('Content-Type: application/json');
$filesList = glob("rutter/*.{gpx,kml,geojson,GPX,KML,GEOJSON}", GLOB_BRACE);

foreach ($filesList as $k=>$v) {
    $filesList[$k] = str_replace("rutter/", "", $v);
}

usort($filesList, 'strnatcasecmp');

echo json_encode($filesList);
?>