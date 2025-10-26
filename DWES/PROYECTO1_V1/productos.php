<?php
include 'nav.php';
include 'conexion.php';


//Recoger la categoria elegida en el home
if (isset($_GET['categoria'])) {
    $categoria = $_GET['categoria'];
} else {
    $categoria = 1; // o redirigir, mostrar mensaje, etc.
}

//Comprobar que se ha procesado el formulario de compra
if ($_SERVER["REQUEST_METHOD"] == 'POST' && isset($_POST['comprar'])) {
    $id_producto = $_POST['comprar'];
    $unidades = $_POST['unidades'][$id_producto];

    //Obtener datos del producto
    $sql = "SELECT nombre FROM productos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id_producto]);
    $producto = $stmt->fetch(PDO::FETCH_ASSOC);


    if ($producto) {
        $nombre = $producto['nombre'];

        //Iniciar el carrito en caso de que no este iniciado
        if (!isset($_SESSION['carrito'])) {
            $_SESSION['carrito'] = [];
        }


        $productoYaEnCarrito = false;

        //Comprobar si el producto ya esta en el carrito
        foreach ($_SESSION['carrito'] as &$item) {  //Utilizamos & delante de la variable para trabajar con la referencia y no con la copia
            if ($item['id_producto'] == $id_producto) {
                $item['cantidad'] += $unidades;
                $productoYaEnCarrito = true;
                break;
            }
        }
        unset($item); //Romper la referencia

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
        echo "Producto no encontrado";
    }
}

$sql = "SELECT id, nombre, descripcion, precio, stock FROM productos WHERE id_categoria = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$categoria]);
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<h2>Productos de la categoria: <?php echo $categoria ?></h2>

<?php if (count($productos) > 0): ?>
    <form method="POST" action="productos.php?categoria=<?php echo $categoria; ?>">
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
                <tr>
                    <td><?php echo htmlspecialchars($producto['nombre']); ?></td>
                    <td><?php echo htmlspecialchars($producto['descripcion']); ?></td>
                    <td><?php echo number_format($producto['precio'], 2); ?></td>
                    <td><?php echo intval($producto['stock']); ?></td>
                    <td>
                        <input type="number" name="unidades[<?php echo $producto['id']; ?>]" min="1" max="<?php echo $producto['stock']; ?>" value="1">
                    </td>
                    <td>
                        <button type="submit" name="comprar" value="<?php echo $producto['id']; ?>">Comprar</button>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
        <input type="hidden" name="origen" value="productos.php"> <!-- Sirve para recargar la pagina a la hora de usar el carrito -->
    </form>
<?php else: ?>
    <p>No hay productos disponibles en esta categoría.</p>
<?php endif; ?>