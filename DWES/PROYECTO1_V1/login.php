<?php
session_start();
include 'conexion.php';

if (($_SERVER['REQUEST_METHOD'] == "POST")) {
    $email = $_POST['email'];
    $clave = $_POST['clave'];

    //Verificar datos de login en la base de datos
    $sql = "SELECT * FROM restaurantes WHERE email = ? AND clave = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$email, $clave]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        $_SESSION['email'] = $result['id'];

        header("Location: home.php");
        exit();
    } else {
        echo "Usuario o contraseña incorrectos. Prueba de nuevo";
    }
}

?>


<body>
    <h2>Inicio de sesión</h2>
    <form method="POST">

        <label>Email:</label>
        <input type="text" name="email" required>

        <label>Contraseña:</label>
        <input type="password" name="clave" required>

        <button type="submit">Iniciar sesión</button>
    </form>
</body>