<?php
include 'conexion.php';

//Comprobar si han activado el filtro por categoria
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $categoria = $_POST['categoria'];
    $result;
    //Mostrar solo los libros con la categoria indicada
    $sql = "SELECT * FROM libros WHERE categoria = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$categoria]);
    $result_filtrado = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $result = $result_filtrado;
} else {
    //Buscar toda la información de los libros
    $sql = "SELECT * FROM libros";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result_total = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $result = $result_total;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php include 'nav.php'; ?>
    <h1>Catálogo de libros</h1>
    <hr>

    <form method="post">
        <label>Filtrar por categoria</label>
        <input type="text" name="categoria">
        <button type="submit" value="enviar">Filtrar</button>
    </form>
    <a href="home.php">Volver a mostrar todo</a>

    <table border=1>
        <?php if ($result && count($result) > 0) : ?>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    <th>Puntuación promedio</th>
                    <th>Accionmes</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($result as $row) : ?>
                    <tr>
                        <td><?php echo $row['titulo'] ?></td>
                        <td><?php echo $row['autor'] ?></td>
                        <td><?php echo $row['categoria'] ?></td>
                        <td></td>
                        <td>
                            <a href="detalles.php?id_libro=<?php echo $row['id_libro'] ?>">Ver detalles</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        <?php else : ?>
            <p>No existen libros para esa categoría</p>
        <?php endif; ?>
    </table>

    <h2>Último libro visitado</h2>
    <ul>
        <!-- NO CONSIGO BORRAR LA COOKIE, PERO SI ACTUALIZA EL ULTIMO LIBRO VISITADO -->
        <?php if (!$_COOKIE["remember"]) : ?>
            <li>No se han visualizado libros por el momento</li>
        <?php else : ?>
            <li> <?php echo $_COOKIE['remember']; ?></li>
        <?php endif; ?>
    </ul>
</body>

</html>