<?php
session_start();
include 'conexion.php';

// Procesar formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    // Validar login
    $login_sql = "SELECT * FROM restaurantes WHERE email = ? AND clave = ?";
    $login_stmt = $conn->prepare($login_sql);
    $login_stmt->execute([$usuario, $clave]);
    $login_result = $login_stmt->fetch(PDO::FETCH_ASSOC);

    if ($login_result) {
        // Guardar el ID del restaurante en la sesión
        $_SESSION['usuario'] = $login_result['id_restaurante'];

        // Opcional: también puedes guardar el nombre si lo necesitas
        // $_SESSION['nombre_restaurante'] = $login_result['nombre'];

        header("Location: home.php");
        exit();
    } else {
        echo "<p style='color:red;'>Usuario o contraseña incorrectos.</p>";
    }
}
?>

<!-- Formulario HTML -->
<h2>Login o Registro</h2>
<form method="POST">
    <label>Usuario (email):</label>
    <input type="text" name="usuario" required>
        <label>Contraseña:</label>
    <input type="password" name="clave" required>
    <button type="submit">Iniciar sesión</button>
</form>
