<?php

// if (!isset($_SESSION['email'])) {
//     header("Location: login.php");
//     exit();
// }

if(isset($_GET['categoria'])) {
    if($_GET['categoria'] == 1) {
        $categoria = 1;
    } elseif ($_GET['categoria'] == 2) {
        $categoria = 2;
    } elseif ($_GET['categoria'] == 3) {
        $categoria = 3;
    } else {
        echo "No se ha seleccionado una categoría válida";
    }
}

include 'nav.php';
include 'conexion.php';

// Obtener productos de categoría "con alcohol"
$sql = "SELECT id, nombre, descripcion, precio, stock FROM productos WHERE id_categoria = ?";
$stmt = $conn->prepare($sql);
$stmt->execute([$categoria]);
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<h2>Bebidas con alcohol</h2>

<?php if (count($productos) > 0): ?>
    <form method="POST" action="añadir_carrito.php">
        <table border="1" cellpadding="8" cellspacing="0">
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio (€)</th>
                <th>Stock</th>
            </tr>
            <?php foreach ($productos as $producto): ?>
                <tr>
                    <td><?php echo htmlspecialchars($producto['nombre']); ?></td>
                    <td><?php echo htmlspecialchars($producto['descripcion']); ?></td>
                    <td><?php echo number_format($producto['precio'], 2); ?></td>
                    <td><?php echo intval($producto['stock']); ?></td>
                </tr>
            <?php endforeach; ?>
        </table>
    </form>
<?php else: ?>
    <p>No hay productos disponibles en esta categoría.</p>
<?php endif; ?>