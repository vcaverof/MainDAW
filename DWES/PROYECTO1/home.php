<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}
include 'cabecera.php';
?>

<h2>Lista de categorías</h2>
<ul>
    <li><a href="bebidasCon.php">Bebidas con</a></li>
    <li><a href="bebidasSin.php">Bebidas sin</a></li>
    <li><a href="comida.php">Comida</a></li>
</ul>