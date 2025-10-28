<?php
session_start();
include 'conexion.php';

// Comprobar que el carrito no está vacío
if (!isset($_SESSION['carrito']) || count($_SESSION['carrito']) === 0) {
    echo "<!DOCTYPE html>
    <html lang='es'>
    <head>
        <meta charset='UTF-8'>
        <title>Carrito vacío</title>
        <style>
            body {
                font-family: 'Segoe UI', sans-serif;
                background-color: #f4f4f4;
                text-align: center;
                padding: 60px;
            }
            p {
                font-size: 18px;
                color: #555;
            }
            a {
                display: inline-block;
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #007BFF;
                color: white;
                text-decoration: none;
                border-radius: 5px;
            }
            a:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <p>No hay productos en el carrito.</p>
        <a href='home.php'>Volver al inicio</a>
    </body>
    </html>";
    exit;
}

$id_restaurante = $_SESSION['id_restaurante'];
$fecha_pedido = date('Y-m-d H:i:s');
$total = 0;
$productosConsolidados = [];

foreach ($_SESSION['carrito'] as $item) {
    $id = $item['id_producto'];
    $cantidad = $item['cantidad'];

    $stmt = $conn->prepare("SELECT precio FROM productos WHERE id = ?");
    $stmt->execute([$id]);
    $precio = $stmt->fetchColumn();

    $total += $precio * $cantidad;

    if (isset($productosConsolidados[$id])) {
        $productosConsolidados[$id] += $cantidad;
    } else {
        $productosConsolidados[$id] = $cantidad;
    }
}

echo "<!DOCTYPE html>
<html lang='es'>
<head>
    <meta charset='UTF-8'>
    <title>Confirmación de pedido</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 60px;
        }
        h2 {
            color: #28a745;
            margin-bottom: 20px;
        }
        p {
            font-size: 18px;
            color: #333;
        }
        strong {
            color: #007BFF;
        }
        .error {
            color: red;
        }
        a {
            display: inline-block;
            margin-top: 30px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>";

try {
    $conn->beginTransaction();

    $sqlPedido = "INSERT INTO pedidos (id_restaurante, fecha_pedido, precio_total, enviado) VALUES (?, ?, ?, 0)";
    $stmtPedido = $conn->prepare($sqlPedido);
    $stmtPedido->execute([$id_restaurante, $fecha_pedido, $total]);

    $id_pedido = $conn->lastInsertId();

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
    echo "<p class='error'>❌ Error al confirmar el pedido: " . htmlspecialchars($e->getMessage()) . "</p>";
    echo "<a href='carrito.php'>Volver al carrito</a>";
}

echo "</body></html>";
