<?php
session_start();
include 'nav.php';
include 'conexion.php';

// Eliminar elementos del carrito
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['eliminar'])) {
    $indice = $_POST['eliminar'];
    if (isset($_SESSION['carrito'][$indice])) {
        unset($_SESSION['carrito'][$indice]);
    }
    header("Location: carrito.php");
    exit();
}

// Actualizar cantidades de los elementos del carrito
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['actualizar']) && isset($_POST['cantidades'])) {
    foreach ($_POST['cantidades'] as $index => $cantidad) {
        $id_producto = $_SESSION['carrito'][$index]['id_producto'];

        $stmt = $conn->prepare("SELECT stock FROM productos WHERE id = ?");
        $stmt->execute([$id_producto]);
        $stock = $stmt->fetchColumn();

        $cantidad = max(1, intval($cantidad));
        if ($cantidad > $stock) {
            $cantidad = $stock; // Limita al máximo disponible
        }

        $_SESSION['carrito'][$index]['cantidad'] = $cantidad;
    }

    header("Location: carrito.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Carrito de compras</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 40px;
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }

        .mensaje {
            text-align: center;
            font-size: 18px;
            color: #666;
        }

        table {
            width: 100%;
            max-width: 800px;
            margin: 0 auto 20px auto;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }

        th,
        td {
            padding: 12px 15px;
            border-bottom: 1px solid #ddd;
            text-align: center;
        }

        th {
            background-color: #007BFF;
            color: white;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        input[type="number"] {
            width: 60px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            padding: 8px 12px;
            margin: 5px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button[name="eliminar"] {
            background-color: #dc3545;
        }

        button:hover {
            opacity: 0.9;
        }

        .acciones {
            text-align: center;
            margin-top: 20px;
        }

        .acciones form {
            display: inline-block;
        }
    </style>
</head>

<body>
    <h2>🛒 Tu carrito</h2>

    <?php if (!isset($_SESSION['carrito']) || count($_SESSION['carrito']) === 0): ?>
        <p class="mensaje">El carrito está vacío</p>
    <?php else: ?>
        <form method="post">
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Unidades</th>
                    <th>Acción</th>
                </tr>
                <?php foreach ($_SESSION['carrito'] as $index => $item): ?>
                    <?php
                    $stmt = $conn->prepare("SELECT stock FROM productos WHERE id = ?");
                    $stmt->execute([$item['id_producto']]);
                    $stock = $stmt->fetchColumn();
                    ?>
                    <tr>
                        <td><?php echo htmlspecialchars($item['nombre']); ?></td>
                        <td>
                            <input type="number" name="cantidades[<?php echo $index; ?>]"
                                value="<?php echo intval($item['cantidad']); ?>"
                                min="1" max="<?php echo intval($stock); ?>">
                        </td>
                        <td>
                            <button type="submit" name="eliminar" value="<?php echo $index; ?>">Eliminar</button>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </table>
            <div class="acciones">
                <button type="submit" name="actualizar">Actualizar cantidades</button>
            </div>
        </form>

        <div class="acciones">
            <form method="post" action="confirmar_pedido.php">
                <button type="submit" name="confirmar_pedido">Confirmar pedido</button>
            </form>
        </div>
    <?php endif; ?>
</body>

</html>