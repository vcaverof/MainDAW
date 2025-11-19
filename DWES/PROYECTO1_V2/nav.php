<?php

//Comprobar si se ha cerrado sesion
if (isset($_GET['logout']) && ($_GET['logout'] == true)) {
    session_start();
    session_unset();
    session_destroy();

    header("Location: cerrarSesion.php?logout=1");
    exit();
}

//Comprobar si el usuario ya está logueado
if (isset($_SESSION['usuario_id']) && isset($_COOKIE['remember_me'])) {
    $token = $_COOKIE['remember_me'];

    //Iniciar sesion con los datos de la cookie
    $sql = "SELECT * FROM usuarios WHERE remember_token = ? AND remember_expira > NOW()";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$token]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $_SESSION['usuario_id'] = $user['id'];
        $_SESSION['usuario'] = $user['usuario'];
    } else {
        setcookie('remember_me', '', time() - 3600, '/'); // borrar cookie inválida
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navegador</title>
</head>

<body>
    <p>Usuario: <?php echo $_SESSION['usuario'] ?></p>
    <nav>
        <a href="home.php">Home</a>
        <a href="carrito.php">Carrito</a>
        <a href='home.php?logout="true"'>Cerrar sesion</a>
    </nav>

</body>

</html>