<?php
session_start();
include 'conexion.php';

//Comprueba si se ha enviado el formulario de compra
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['comprar'])) {
    $id_producto = $_POST['comprar'];
    $unidades = $_POST['unidades'][$id_producto];

    // Obtener datos del producto
    $sql = "SELECT nombre FROM productos WHERE id_producto = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id_producto]);
    $producto = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($producto) {
        $nombre = $producto['nombre'];

        // Inicializar el carrito si no existe
        if (!isset($_SESSION['carrito'])) {
            $_SESSION['carrito'] = [];
        }

        $productoYaEnCarrito = false;

        // Verificar si el producto ya está en el carrito
        foreach ($_SESSION['carrito'] as &$item) {
            if ($item['id_producto'] == $id_producto) {
                $item['cantidad'] += $unidades;
                $productoYaEnCarrito = true;
                break;
            }
        }
        unset($item); // Romper referencia

        // Si no estaba en el carrito, añadirlo
        if (!$productoYaEnCarrito) {
            $_SESSION['carrito'][] = [
                'id_producto' => $id_producto,
                'nombre' => $nombre,
                'cantidad' => $unidades
            ];
        }

        $origen = isset($_POST['origen']) ? $_POST['origen'] : 'home.php';
        header("Location: " . $origen);
        exit();
    } else {
        echo "<p style='color:red;'>Producto no encontrado.</p>";
    }
}
