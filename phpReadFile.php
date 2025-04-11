<?php
$url = $_REQUEST["url"];
echo(header('content-type: text/txt'));
$content = file_get_contents($url);
echo $content;
?> 