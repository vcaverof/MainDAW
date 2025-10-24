<?php
session_start();

//Comprobar si se ha iniciado sesion
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}

//Comprobar si se ha cerrado sesión

if (isset($_GET['logut']) && $_GET['logut'] == true) {
    session_start();
    session_unset(); //Eliminar las variables internas de la sesion
    session_destroy(); //Destruye la sesion

    header("Location: login.php");
    exit();
}
?>

<div style="background-color:#f0f0f0; padding:10px; border-bottom:1px solid #ccc;">
    <p>Usuario: <strong><?php echo $_SESSION['email'] ?></strong></p>
    <nav>
        <a href="home.php">Home</a>
        <a href="carrito.php">Ver carrito</a>
        <a href="home.php?logut=true">Cerrar Sesión</a>
    </nav>
    <hr>
</div>