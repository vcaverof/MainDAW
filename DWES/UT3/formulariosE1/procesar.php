<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado selección de frutas</title>
</head>

<body>
    <h2>Fruta favorita seleccionada</h2>
    <?php
        if (isset($_POST['frutas']) && !empty ($_POST['frutas'])) {
            $seleccion = $_POST['frutas'];
            echo '<img src="./' . $seleccion . '.png"';
        } else {
            echo "No has seleccionado ninguna fruta";
        }
    ?>
    <br> <br>
    <button onclick="history.back()">Volver</button>
</body>
</html>