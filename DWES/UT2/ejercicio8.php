<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio8</title>
</head>

<body>
    <table border=1>
        <?php
        for ($i = 1; $i <= 10; $i++) {
            echo
            "<tr>" .
                "<td>" . $i . "</td>" .
            "</tr>";
        }
        ?>
    </table>
</body>

</html>