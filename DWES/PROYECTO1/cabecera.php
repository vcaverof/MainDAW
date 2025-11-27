<?php

if (isset($_GET['logout']) && $_GET['logout'] === 'true') {
    session_start();
    session_unset();      // Limpia todas las variables de sesión
    session_destroy();    // Destruye la sesión
    header("Location: login.php");
    exit();
}

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}
?>

<!-- Cabecera común -->
<div style="background-color:#f0f0f0; padding:10px; border-bottom:1px solid #ccc;">
    <p>👤 Usuario: <strong><?php echo $_SESSION['usuario']; ?></strong></p>
    <nav>
        <a href="home.php">🏠 Ir a Home</a> |
        <a href="carrito.php">🛒 Ver Carrito</a> |
        <a href="cabecera.php?logout=true">🔒 Cerrar Sesión</a>
    </nav>
</div>
<hr>