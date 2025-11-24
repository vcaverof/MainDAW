<?php
session_start();
include 'conexion.php';
include 'nav.php';

//Comprobar si se ha enviado la categoria por GET
if (isset($_GET['categoria'])) {
    $id_categoria = intval($_GET['categoria']); //Convertir a entero la categoria

    //Mostrar productos de la categoria
    $sql = "SELECT nombre, stock, precio FROM productos WHERE id_categoria = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id_categoria]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //Guardar el nombre de la categoria
    $categoria_sql = "SELECT nombre FROM categorias WHERE id = ?";
    $categoria_stmt = $conn->prepare($categoria_sql);
    $categoria_stmt->execute([$id_categoria]);
    $categoria_result = $categoria_stmt->fetch(PDO::FETCH_ASSOC);
} else {
    //Si no se pasa categoria redirigimos al home
    header("Location: home.php");
    exit();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
</head>

<body>
    <h1>Productos de la categoria <?php echo $categoria_result['nombre']; ?></h1>
    <hr>

    <?php if ($result && count($result) > 0) : ?>
        <table border="1" cellpadding="8" cellspacing="0">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($result as $row) : ?>
                    <tr>
                        <td><strong><?php echo htmlspecialchars($row['nombre']); ?></strong></td>
                        <td><?php echo $row['stock']; ?></td>
                        <td><?php echo number_format($row['precio'], 2); ?>€</td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    <?php else : ?>
        <p>No hay productos en la categoría</p>
    <?php endif; ?>
</body>

</html>