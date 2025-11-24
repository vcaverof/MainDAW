<?php
session_start();
include 'conexion.php';

//Comprobar que se ha procesado el formulario de login
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $clave = $_POST['clave'];

    //Comprobar los datos del usuario en la base de datos
    $sql = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$email]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    //Comprobar si existen resultados de nuestra búsqueda
    if ($result && $result['password'] == $clave) {
        $_SESSION['email'] = $result['email'];
        $_SESSION['id_usuario'] = $result['id_usuario'];

        header("Location: home.php");
        exit();
    } else {
        echo "Correo o contraseña incorrectos. Prueba de nuevo";
    }
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
    <form method="post">
        <h1>Inicio de sesión</h1>
        <label>Correo:</label>
        <input type="email" name="email">

        <label>Contraseña</label>
        <input type="password" name="clave">

        <button type="submit" value="enviar">Iniciar sesión</button>
    </form>

</body>

</html>