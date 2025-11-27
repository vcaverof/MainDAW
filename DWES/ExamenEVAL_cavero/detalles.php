<?php
include 'conexion.php';
include 'nav.php';

//Comprobar que se ha procesado el "Ver detalles"
if (isset($_GET['id_libro'])) {
    $id_libro = $_GET['id_libro'];

    //Buscar los datos del libro
    $sql = "SELECT * FROM libros WHERE id_libro = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id_libro]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    //Mostrar tambien las reseñas por libro
    $sql = "SELECT * FROM resenias WHERE id_libro = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$id_libro]);
    $result_resenia = $stmt->fetchAll(PDO::FETCH_ASSOC);


    //Crear una cookie con el libro que acabamos de visitar
    $expira = time() + 30 * 24 * 60 * 60; //La cookie dura 30 dias
    setcookie("remember", $result['titulo'], $expira);
}


//NO FUNCIONA EL INSERTAR RESEÑAS, PERO SI ACTUALIZA EN CASO DE EXISTIR, CREO QUE LA CONSULTA ESTA MAL

//Comprobar si se ha enviado el formulario de guardar reseña
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $puntuacion = $_POST['puntuacion'];
    $comentario = $_POST['comentario'];

    //Comprobamos si el usuario ha puesto alguna reseña en el libro
    $sql = "SELECT * FROM resenias WHERE id_usuario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$_SESSION['id_usuario']]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //Si hay resultados, tenemos que modificar la reseña existente
    if ($result) {
        $sql_update = "UPDATE resenias SET puntuacion = ?, comentario = ?, fecha = ?  WHERE id_usuario = ?";
        $stmt_update = $conn->prepare($sql_update);
        $stmt_update->execute([$puntuacion, $comentario, date("Y-m-d", time()), $_SESSION['id_usuario'], $id_libro]);
        echo "Se ha actualizado la reseña con éxito";
    } else { //Si no existe reseña, la creamos 
        $sql_insert = "INSERT INTO resenias (id_usuario, id_libro, puntuacion, comentario, fecha) VALUES (?, ?, ?, ?, ?)";
        $stmt_insert = $conn->prepare($sql_insert);
        $stmt_insert->execute([$_SESSION['id_usuario'], $id_libro, $puntuacion, $comentario, date("Y-m-d", time())]);
        echo "Se ha añadido la reseña con éxito";
    }

    header("Location: detalles.php?id_libro=$id_libro");
    exit();
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles del libro</title>
</head>

<body>
    <h1>Detalles del libro "<?php echo $result['titulo'] ?>"</h1>
    <p><strong>Autor: </strong> <?php echo $result['autor'] ?></p>
    <p><strong>Categoria: </strong> <?php echo $result['categoria'] ?></p>

    <h2>Reseñas</h2>
    <ul>
        <?php if ($result_resenia && count($result_resenia) > 0) : ?>
            <li>
                <?php foreach ($result_resenia as $row) : ?>
                    <p>
                        <?php echo $row['id_usuario'] ?>: <!-- Muestra el ID no el usuario, hay que arreglarlo -->
                        <?php echo $row['puntuacion'] ?>/5 -
                        <?php echo $row['comentario'] ?>
                    </p>
                <?php endforeach; ?>
            </li>
        <?php else : ?>
            <p>El libro no tiene ninguna reseña</p>
        <?php endif; ?>
    </ul>

    <h2>Tu reseña</h2>
    <form method="post">
        <label>Puntuación: </label>
        <select name="puntuacion">
            <option name="opcion" value="1">1</option>
            <option name="opcion" value="2">2</option>
            <option name="opcion" value="3">3</option>
            <option name="opcion" value="4">4</option>
            <option name="opcion" value="5">5</option>
        </select>
        <br> <br>
        <label>Comentario</label>
        <!-- Maximo 200 caracteres de comentario -->
        <textarea name="comentario" maxlength="200" placeholder="Máximo 200 caracteres"></textarea>
        <br>

        <button type="submit" value="guardar">Guardar reseña</button>
    </form>

    <br>
    <a href="home.php">Volver al home</a>
</body>

</html>