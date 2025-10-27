
<?php
include 'nav.php';
include 'conexion.php';

if (!isset($_SESSION['id_restaurante']) && isset($_COOKIE['remember_me'])) {
    $token = $_COOKIE['remember_me'];

    $sql = "SELECT id, email FROM restaurantes WHERE remember_token = ? AND remember_expira > NOW()";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$token]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario) {
        $_SESSION['id_restaurante'] = $usuario['id'];
        $_SESSION['email'] = $usuario['email'];
    }
}

?>

<!-- INTERFAZ -->
<body>
    <h2>Lista de categorías</h2>
    <a href="productos.php?categoria=1">Bebidas con alcohol</a> <br>
    <a href="productos.php?categoria=2">Bebidas sin alcohol</a> <br>
    <a href="productos.php?categoria=3">Comida</a>
</body>
