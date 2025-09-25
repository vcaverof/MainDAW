<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio10</title>
</head>

<body>
    <?php
    echo "Numeros pares entre 1 y 100";
    ?>
    <table border=1>
        <?php
        for ($i = 1; $i <= 100; $i++) {
            if ($i % 2 == 0) {
                echo "<tr>" . "<td>" . "$i" . "</td>" . "</tr>";
            }
        }
        ?>
    </table>
</body>

</html>