<?php
session_start();

// Conexión a la base de datos con PDO
$host = "localhost";
$user = "root";
$password = "";
$dbname = "login"; //Mi base de datos

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Mostrar dashboard si ya está logueado
if (isset($_SESSION['usuario'])) {
    echo "<h2>Bienvenido, " . $_SESSION['usuario'] . "</h2>";
    echo "<p>Sesión iniciada correctamente.</p>";
    echo "<form method='POST'><button name='logout'>Cerrar sesión</button></form>";
    if (isset($_POST['logout'])) {
        session_destroy();
        header("Location: E3sesiones.php");
    }
    exit();
}

// Procesar formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $accion = $_POST['accion'];
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];
    $password_hash = password_hash($clave, PASSWORD_DEFAULT);

    if ($accion === "registro") {
        // Verificar si el usuario ya existe
        $check_sql = "SELECT * FROM usuarios WHERE usuario = ?";
        $check_stmt = $conn->prepare($check_sql);
        $check_stmt->execute([$usuario]);
        $check_result = $check_stmt->fetchAll();

        if (count($check_result) > 0) {
            echo "<p style='color:red;'>El usuario ya existe. Intenta iniciar sesión.</p>";
        } else {
            // Registrar nuevo usuario
            $insert_sql = "INSERT INTO usuarios (usuario, clave) VALUES (?, ?)";
            $insert_stmt = $conn->prepare($insert_sql);
            $insert_stmt->execute([$usuario, $password_hash]);
            echo "<p style='color:green;'>Usuario registrado correctamente. Ahora puedes iniciar sesión.</p>";
        }
    }

    if ($accion === "login") {
        // Validar login
        $login_sql = "SELECT * FROM usuarios WHERE usuario = ?";
        $login_stmt = $conn->prepare($login_sql);
        $login_stmt->execute([$usuario]);
        $login_result = $login_stmt->fetch(PDO::FETCH_ASSOC);

        //Comprobar que existen usuarios tras la búsqueda y que además coincide la clave con el hash almacenado
        if ($login_result && password_verify($clave, $login_result['clave'])) {
            $_SESSION['usuario'] = $usuario;

            // Registrar sesión
            $fecha = date("Y-m-d H:i:s");
            $log_sql = "INSERT INTO sesiones (usuario, fecha_login) VALUES (?, ?)";
            $log_stmt = $conn->prepare($log_sql);
            $log_stmt->execute([$usuario, $fecha]);

            header("Location: E3sesiones.php");
            exit();
        } else {
            echo "<p style='color:red;'>Usuario o contraseña incorrectos.</p>";
        }
    }
}
?>

<!-- Formulario HTML -->
<h2>Login o Registro</h2>
<form method="POST">
    <label>Usuario:</label><br>
    <input type="text" name="usuario" required><br><br>
    <label>Contraseña:</label><br>
    <input type="password" name="clave" required><br><br>
    <button type="submit" name="accion" value="login">Iniciar sesión</button>
    <button type="submit" name="accion" value="registro">Registrarse</button>
</form>