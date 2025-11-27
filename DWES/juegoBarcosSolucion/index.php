<?php
session_start();

// Si se envió el formulario, procesamos los datos
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $intentos = isset($_POST['intentos']) ? max(1, intval($_POST['intentos'])) : 40;
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
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Inicio del juego de los barcos</title>
</head>

<body>
    <h2>Juego de los Barcos</h2>
    <form method="post">
        <label for="intentos">Número de intentos permitidos (mínimo 1):</label><br>
        <input type="number" name="intentos" id="intentos" value="40" min="1"><br><br>

        <label for="modo">Modo de colocación de barcos:</label><br>
        <select name="modo" id="modo">
            <option value="aleatorio">Aleatorio</option>
            <option value="fichero">Cargar desde fichero</option>
        </select><br><br>

        <button type="submit">Empezar partida</button>
    </form>
</body>

</html>