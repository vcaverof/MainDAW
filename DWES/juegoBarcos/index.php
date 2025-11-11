<?php
session_start();

//Comprobar si se ha enviado el formualario
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $intentos = isset($_POST['intentos']) ? max(1, intval($_POST['intentos'])): 40;
    $modo = $_POST['modo'] ?? 'aleatorio';

    require 'funciones.php';

    $_SESSION['intentos'] = $intentos;
    $_SESSION['modo'] = $modo;
    $_SESSION['tablero'] = ($modo === 'fichero') ? cargarDesdeFichero() : generarTablero();
    $_SESSION['disparos'] = [];
    $_SESSION['aciertos'] = 0;

    header('Location: juego.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
</head>

<body>
    <form method="post">
        <label for="intentos">Introduce el número máximo de intentos</label>
        <input type="number" name="intentos" id="intentos" value="40" min="1"><br><br>

        <label for="modo">Modo de generación de barcos</label>
        <select name="modo" id="modo">
            <option value="aleatorio">Generar aleatoriamente</option>
            <option value="fichero">Generar mediante fichero</option>
        </select> <br> <br>

        <button type="submit">Empezar partida</button>
    </form>
</body>

</html>