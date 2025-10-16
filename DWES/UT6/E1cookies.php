<?php
$nombre_cookie = "contador_visitas";

$duracion = 365 * 24 * 60 * 60;

//Verificar si la cookie ya existe
if (isset($_COOKIE[$nombre_cookie])) {
    //Incrementar el contador
    $visitas = $_COOKIE[$nombre_cookie] + 1;
} else {
    $visitas = 1;
}

setcookie($nombre_cookie, $visitas, time() + $duracion);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Contador de Visitas</title>
</head>
<body>
    <h1>Bienvenido</h1>
    <p>Has visitado esta página <strong><?= $visitas ?></strong> veces.</p>
</body>
</html>