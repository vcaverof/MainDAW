<?php
session_start();
include 'conexion.php';

//Comprobar que el carrito no está vacío
if (!isset($_SESSION['carrito']) || count($_SESSION['carrito']) === 0) {
    echo "<p>No hay productos en el carrito.</p>";
    echo "<a href='home.php'>Volver al inicio</a>";
    exit;
}

$id_restaurante = $_SESSION['id_restaurante'];
$fecha_pedido = date('Y-m-d H:i:s');
$total = 0;

// Consolidar productos por ID
$productosConsolidados = [];

foreach ($_SESSION['carrito'] as $item) {
    $id = $item['id_producto'];
    $cantidad = $item['cantidad'];

    // Obtener precio desde la base de datos
    $stmt = $conn->prepare("SELECT precio FROM productos WHERE id = ?");
    $stmt->execute([$id]);
    $precio = $stmt->fetchColumn();

    $total += $precio * $cantidad;

    // Agrupar cantidades
    if (isset($productosConsolidados[$id])) {
        $productosConsolidados[$id] += $cantidad;
    } else {
        $productosConsolidados[$id] = $cantidad;
    }
}

try {
    $conn->beginTransaction();

    // Insertar pedido
    $sqlPedido = "INSERT INTO pedidos (id_restaurante, fecha_pedido, precio_total, enviado) VALUES (?, ?, ?, 0)";
    $stmtPedido = $conn->prepare($sqlPedido);
    $stmtPedido->execute([$id_restaurante, $fecha_pedido, $total]);

    $id_pedido = $conn->lastInsertId();

    // Insertar detalles del pedido y actualizar stock
    $sqlDetalle = "INSERT INTO detallepedido (id_pedido, id_producto, cantidad) VALUES (?, ?, ?)";
    $stmtDetalle = $conn->prepare($sqlDetalle);

    $sqlStock = "UPDATE productos SET stock = stock - ? WHERE id = ?";
    $stmtStock = $conn->prepare($sqlStock);

    foreach ($productosConsolidados as $id_producto => $cantidad) {
        $stmtDetalle->execute([$id_pedido, $id_producto, $cantidad]);
        $stmtStock->execute([$cantidad, $id_producto]);
    }

    $conn->commit();
    unset($_SESSION['carrito']);

    echo "<h2>✅ Pedido confirmado</h2>";
    echo "<p>Tu pedido número <strong>$id_pedido</strong> ha sido registrado correctamente.</p>";
    echo "<p>Total: <strong>" . number_format($total, 2) . " €</strong></p>";
    echo "<a href='home.php'>Volver al inicio</a>";
} catch (Exception $e) {
    $conn->rollBack();
    echo "<p style='color:red;'>Error al confirmar el pedido: " . $e->getMessage() . "</p>";
    echo "<a href='carrito.php'>Volver al carrito</a>";
}
