<?php
session_start();
include 'nav.php';
include 'conexion.php';

$categoria = isset($_GET['categoria']) ? $_GET['categoria'] : null;

//Verifica si se ha enviado el formulario de compra
if ($_SERVER["REQUEST_METHOD"] == 'POST' && isset($_POST['comprar'])) {
    $id_producto = $_POST['comprar'];
    $unidades = $_POST['unidades'][$id_producto];

    //Consulta el nombre y stock actual del producto
    $sql = "SELECT nombre, stock FROM productos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id_producto]);
    $producto = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($producto) {
        $nombre = $producto['nombre'];
        $stock_actual = $producto['stock'];

        //Verifica si el producto ya está en el carrito y cuántas unidades hay
        $enCarrito = 0;
        if (isset($_SESSION['carrito'])) {
            foreach ($_SESSION['carrito'] as $item) {
                if ($item['id_producto'] == $id_producto) {
                    $enCarrito = $item['cantidad'];
                    break;
                }
            }
        }

        $totalSolicitado = $enCarrito + $unidades;

        //Si se solicita más de lo disponible, muestra un mensaje de error
        if ($totalSolicitado > $stock_actual) {
            $_SESSION['mensaje'] = "<p class='mensaje error'>❌ No puedes añadir $unidades unidades de '$nombre'. Ya tienes $enCarrito en el carrito y solo hay $stock_actual disponibles.</p>";
        } else {
            $stock_restante = $stock_actual - $totalSolicitado;

            // Muestra alerta si el stock restante es bajo
            if ($stock_restante < 5) {
                $_SESSION['mensaje'] = "<p class='mensaje alerta'>⚠️ Atención: quedarán $stock_restante unidades de '$nombre' en stock después de esta compra.</p>";
            } else {
                $_SESSION['mensaje'] = null;
            }

            // Inicializa el carrito si no existe
            if (!isset($_SESSION['carrito'])) {
                $_SESSION['carrito'] = [];
            }

            $productoYaEnCarrito = false;

            // Actualiza la cantidad si el producto ya está en el carrito
            foreach ($_SESSION['carrito'] as &$item) {
                if ($item['id_producto'] == $id_producto) {
                    $item['cantidad'] += $unidades;
                    $productoYaEnCarrito = true;
                    break;
                }
            }
            unset($item);

            // Si no está en el carrito, lo añade
            if (!$productoYaEnCarrito) {
                $_SESSION['carrito'][] = [
                    'id_producto' => $id_producto,
                    'nombre' => $nombre,
                    'cantidad' => $unidades
                ];
            }

            // Redirige a la página de origen o a home.php
            $origen = isset($_POST['origen']) ? $_POST['origen'] . '?categoria=' . urlencode($categoria) : 'home.php';
            header("Location: " . $origen);
            exit();
        }
    } else {
        $_SESSION['mensaje'] = "<p class='mensaje error'>❌ Producto no encontrado.</p>";
    }
}

// Consulta los productos de la categoría seleccionada
$sql = "SELECT id, nombre, descripcion, precio, stock FROM productos WHERE id_categoria = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$categoria]);
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Productos</title>
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
            margin-bottom: 20px;
            font-weight: bold;
        }

        .mensaje.error {
            color: red;
        }

        .mensaje.alerta {
            color: orange;
        }

        table {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
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
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button[disabled] {
            background-color: #ccc;
            cursor: not-allowed;
        }

        button:hover:not([disabled]) {
            background-color: #218838;
        }

        .stock-alert {
            font-weight: bold;
        }

        .stock-alert.red {
            color: red;
        }

        .stock-alert.orange {
            color: orange;
        }

        p.no-productos {
            text-align: center;
            font-size: 18px;
            color: #666;
        }
    </style>
</head>

<body>
    <h2>Productos de la categoría: <?php echo htmlspecialchars($categoria); ?></h2>

    <!-- Muestra el mensaje de sesión si existe -->
    <?php
    if (isset($_SESSION['mensaje'])) {
        echo $_SESSION['mensaje'];
        unset($_SESSION['mensaje']);
    }
    ?>

    <?php if (count($productos) > 0): ?>
        <form method="POST" action="productos.php?categoria=<?php echo urlencode($categoria); ?>">
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio (€)</th>
                    <th>Stock</th>
                    <th>Unidades</th>
                    <th>Acción</th>
                </tr>
                <?php foreach ($productos as $producto): ?>
                    <?php
                    $id = $producto['id'];
                    $stock = intval($producto['stock']);

                    // Verifica si el producto ya está en el carrito
                    $enCarrito = 0;
                    if (isset($_SESSION['carrito'])) {
                        foreach ($_SESSION['carrito'] as $item) {
                            if ($item['id_producto'] == $id) {
                                $enCarrito = $item['cantidad'];
                                break;
                            }
                        }
                    }

                    // Calcula el stock disponible para mostrar
                    $stock_informativo = $stock - $enCarrito;


                    // Define alertas visuales según el stock
                    $aviso = '';
                    $clase = '';
                    if ($stock_informativo <= 0) {
                        $aviso = "🔴 Sin stock";
                        $clase = "red";
                    } elseif ($stock_informativo <= 5) {
                        $aviso = "🟠 ¡Quedan pocas unidades!";
                        $clase = "orange";
                    }
                    ?>
                    <tr>
                        <td><?php echo htmlspecialchars($producto['nombre']); ?></td>
                        <td><?php echo htmlspecialchars($producto['descripcion']); ?></td>
                        <td><?php echo number_format($producto['precio'], 2); ?></td>
                        <td>
                            <?php echo max(0, $stock_informativo); ?>
                            <?php if ($aviso): ?>
                                <div class="stock-alert <?php echo $clase; ?>"><?php echo $aviso; ?></div>
                            <?php endif; ?>
                        </td>
                        <td>
                            <?php if ($stock_informativo > 0): ?>
                                <input type="number" name="unidades[<?php echo $id; ?>]" min="1" max="<?php echo $stock_informativo; ?>" value="1">
                            <?php else: ?>
                                <input type="number" disabled value="0">
                            <?php endif; ?>
                        </td>
                        <td>
                            <?php if ($stock_informativo > 0): ?>
                                <button type="submit" name="comprar" value="<?php echo $id; ?>">Añadir al carrito</button>
                            <?php else: ?>
                                <button disabled>Agotado</button>
                            <?php endif; ?>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </table>
            <input type="hidden" name="origen" value="productos.php">
        </form>
    <?php else: ?>
        <p class="no-productos">No hay productos disponibles en esta categoría.</p>
    <?php endif; ?>
</body>

</html>