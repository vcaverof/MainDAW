<?php
session_start();

if (isset($_POST['eliminar'])) {
    $index = $_POST['eliminar'];
    unset($_SESSION['carrito'][$index]);
    $_SESSION['carrito'] = array_values($_SESSION['carrito']); // Reindexar
}

if (isset($_POST['actualizar']) && isset($_POST['cantidades'])) {
    foreach ($_POST['cantidades'] as $index => $cantidad) {
        $_SESSION['carrito'][$index]['cantidad'] = max(1, intval($cantidad));
    }
}

header("Location: carrito.php");
exit();
