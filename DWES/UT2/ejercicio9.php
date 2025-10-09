<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio9</title>
</head>

<body>
    <?php
    $num = rand(1, 10);
    echo "Tabla de multiplicar del $num" . "<br>";

    for ($i = 1; $i <= 10; $i++) {
        echo "<tr>" . "$num x $i = " .  ($i * $num) . "</tr>" . "<br>";
    }
    ?>


</body>

</html>