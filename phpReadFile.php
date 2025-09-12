<?php
// echo(header("Access-Control-Allow-Origin: *"));
echo(header('content-type: text/txt'));
$url = $_REQUEST["url"];
$content = file_get_contents($url);
echo $content;
?> 