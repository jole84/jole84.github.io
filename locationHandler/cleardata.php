<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post">
        <input type="submit" name="button1" class="button" value="Delete locationData" />
    </form>
    <?php

    if (array_key_exists('button1', $_POST)) {
        clearData();
    }
    function clearData()
    {
        $filename = 'locationData.json';
        $emptyArray = [];
        chown("/var/www/html/locationHandler", "www-data");
        try {
            file_put_contents($filename, json_encode($emptyArray));
        } catch (Exception $ex) {
            echo $ex;
            unlink($filename);
        }
        echo "$filename cleared!";
    }
    ?>
</body>

</html>