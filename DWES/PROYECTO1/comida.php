<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}

include 'cabecera.php';
include 'conexion.php';

// Obtener productos de categoría "comida"
$sql = "SELECT id_producto, nombre, descripcion, precio, stock FROM productos WHERE id_categoria = 3";
$stmt = $conn->prepare($sql);
$stmt->execute();
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<h2>Comida</h2>

<?php if (count($productos) > 0): ?>
    <form method="POST" action="añadir_carrito.php">
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
                        <input type="number" name="unidades[<?php echo $producto['id_producto']; ?>]" min="1" max="<?php echo $producto['stock']; ?>" value="1">
                    </td>
                    <td>
                        <button type="submit" name="comprar" value="<?php echo $producto['id_producto']; ?>">Comprar</button>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
        <input type="hidden" name="origen" value="comida.php">
    </form>
<?php else: ?>
    <p>No hay productos disponibles en esta categoría.</p>
<?php endif; ?>