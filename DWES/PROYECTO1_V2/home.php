<?php
session_start();
include 'conexion.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>

<body>
    <h1>Bienvenido al home</h1>
    <?php include 'nav.php' ?>
    <h2>Lista de categorias</h2>
    <div class="categoria">
        <ul>
            <li><a href="productos.php?categoria=1">Tecnologia</a></li>
            <li><a href="productos.php?categoria=2">Ropa</a></li>
            <li><a href="productos.php?categoria=3">Alimentos</a></li>
            <li><a href="productos.php?categoria=4">Hogar</a></li>
            <li><a href="productos.php?categoria=5">Deportes</a></li>
            <li><a href="productos.php?categoria=6">Libros</a></li>
            <li><a href="productos.php?categoria=7">Juguetes</a></li>
        </ul>

    </div>

</body>

</html>