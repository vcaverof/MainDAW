<?php
include 'nav.php';
include 'conexion.php';

// Recoger la categoría elegida
$categoria = isset($_GET['categoria']) ? $_GET['categoria'] : null;

// Procesar el formulario de compra
if ($_SERVER["REQUEST_METHOD"] == 'POST' && isset($_POST['comprar'])) {
    $id_producto = $_POST['comprar'];
    $unidades = $_POST['unidades'][$id_producto];

    // Obtener datos del producto incluyendo stock
    $sql = "SELECT nombre, stock FROM productos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id_producto]);
    $producto = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($producto) {
        $nombre = $producto['nombre'];
        $stock_actual = $producto['stock'];

        // Calcular cuántas unidades ya hay en el carrito
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

        if ($totalSolicitado > $stock_actual) {
            $_SESSION['mensaje'] = "<p style='color:red;'>❌ No puedes añadir $unidades unidades de '$nombre'. Ya tienes $enCarrito en el carrito y solo hay $stock_actual disponibles.</p>";
        } else {
            $stock_restante = $stock_actual - $totalSolicitado;

            if ($stock_restante <= 5) {
                $_SESSION['mensaje'] = "<p style='color:orange;'>⚠️ Atención: solo quedarán $stock_restante unidades de '$nombre' en stock después de esta compra.</p>";
            } else {
                $_SESSION['mensaje'] = null;
            }

            // Iniciar el carrito si no existe
            if (!isset($_SESSION['carrito'])) {
                $_SESSION['carrito'] = [];
            }

            $productoYaEnCarrito = false;

            // Actualizar cantidad en el carrito
            foreach ($_SESSION['carrito'] as &$item) {
                if ($item['id_producto'] == $id_producto) {
                    $item['cantidad'] += $unidades;
                    $productoYaEnCarrito = true;
                    break;
                }
            }
            unset($item);

            if (!$productoYaEnCarrito) {
                $_SESSION['carrito'][] = [
                    'id_producto' => $id_producto,
                    'nombre' => $nombre,
                    'cantidad' => $unidades
                ];
            }

            // Redirigir
            $origen = isset($_POST['origen']) ? $_POST['origen'] . '?categoria=' . urlencode($categoria) : 'home.php';
            header("Location: " . $origen);
            exit();
        }
    } else {
        $_SESSION['mensaje'] = "<p style='color:red;'>❌ Producto no encontrado.</p>";
    }
}

// Mostrar productos de la categoría
$sql = "SELECT id, nombre, descripcion, precio, stock FROM productos WHERE id_categoria = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$categoria]);
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<h2>Productos de la categoría: <?php echo htmlspecialchars($categoria); ?></h2>

<?php
// Mostrar mensaje si existe
if (isset($_SESSION['mensaje'])) {
    echo $_SESSION['mensaje'];
    unset($_SESSION['mensaje']);
}
?>

<?php if (count($productos) > 0): ?>
    <form method="POST" action="productos.php?categoria=<?php echo urlencode($categoria); ?>">
        <table border="1" cellpadding="8" cellspacing="0">
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
                $stock = intval($producto['stock']);
                $aviso = '';
                if ($stock == 0) {
                    $aviso = "<span style='color:red;'>🔴 Sin stock</span>";
                } elseif ($stock <= 5) {
                    $aviso = "<span style='color:orange;'>🟠 ¡Quedan pocas unidades!</span>";
                }
                ?>
                <tr>
                    <td><?php echo htmlspecialchars($producto['nombre']); ?></td>
                    <td><?php echo htmlspecialchars($producto['descripcion']); ?></td>
                    <td><?php echo number_format($producto['precio'], 2); ?></td>
                    <td>
                        <?php echo $stock; ?> <?php echo $aviso; ?>
                    </td>
                    <td>
                        <?php if ($stock > 0): ?>
                            <input type="number" name="unidades[<?php echo $producto['id']; ?>]" min="1" max="<?php echo $stock; ?>" value="1">
                        <?php else: ?>
                            <input type="number" disabled value="0">
                        <?php endif; ?>
                    </td>
                    <td>
                        <?php if ($stock > 0): ?>
                            <button type="submit" name="comprar" value="<?php echo $producto['id']; ?>">Comprar</button>
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
    <p>No hay productos disponibles en esta categoría.</p>
<?php endif; ?>