<?php
$nombre_cookie = "idioma";

$duracion = 365 * 24 * 60 * 60;


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seleccionar idioma</title>
</head>

<body>
    <form methos="post" action="">

        <label>Español</label>
        <input type="radio" name="idioma" value="esp">

        <label>Inglés</label>
        <input type="radio" name="idioma" value="eng">

        <input type="submit">
    </form>


</body>

</html>