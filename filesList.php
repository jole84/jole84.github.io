<?php
echo(header("Access-Control-Allow-Origin: *"));
echo(header("Access-Control-Allow-Headers: *"));
header('Content-Type: application/json');
$filesList = glob("rutter/*.{gpx,kml,geojson,GPX,KML,GEOJSON}", GLOB_BRACE);

foreach ($filesList as $k=>$v) {
    $filesList[$k] = "https://jole84.se/" . $v;
}

usort($filesList, 'strnatcasecmp');

echo json_encode($filesList);
?>