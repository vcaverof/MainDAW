<?php
session_start();

include 'conexion.php';

//Comprobar si se ha procesado el formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    $accion = $_POST['accion'];
    $recordarme = isset($_POST['recordarme']); //Comprueba si la celda de recordarme está activada

    //Si el usuario pulsa registrarse, guardamos el usuario en la base de datos
    if ($accion == "registrar") {
        $hash = password_hash($clave, PASSWORD_DEFAULT);

        //Buscamos si el usuario existe en la base de datos con ese nombre
        $sql = "SELECT * FROM usuarios WHERE usuario = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$usuario]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$result) {
            //Si no existe, lo metemos en la base de datos
            $insert_sql = "INSERT INTO usuarios (usuario, clave) VALUES (?, ?)";
            $insert_stmt = $conn->prepare($insert_sql);
            $insert_stmt->execute([$usuario, $hash]);
            echo "Se ha registrado con éxito. Proceda a iniciar sesión";
        } else {
            echo "No es posible registrar un usuario con el nombre $usuario. Nombre ya en uso";
        }
    }

    //Si el usuario pulsa iniciar sesión, buscamos al usuario en la base de datos
    if ($accion == "iniciar") {
        //Comprobar los datos del usuario en la base de datos
        $sql = "SELECT * FROM usuarios WHERE usuario = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$usuario]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result && password_verify($clave, $result['clave'])) {
            $_SESSION['usuario_id'] = $result['id'];
            $_SESSION['usuario'] = $result['usuario'];

            //Comprobamos si el usuario ha marcado recordarme

            if ($recordarme) {

                //Generamos un token y una fecha de expiración para la cookie
                $token = bin2hex(random_bytes(32));
                $expira = time() + 30 * 24 * 60 * 60; //dias, horas, minutos, segundos (30 dias)

                //Insertamos los datos en la tabla de la cookie en el usuario
                $cookie_sql = "UPDATE usuarios SET remember_token = ?, remember_expira = ? WHERE id = ?";
                $cookie_stmt = $conn->prepare($cookie_sql);
                $cookie_stmt->execute([$token, date("Y-m-d H:i:s", $expira), $_SESSION['usuario_id']]);

                //Crear la cookie
                setCookie("remember_me", $token, $expira);
            }

            header("Location: home.php");
            exit();
        }
    }
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <h1>FORMULARIO DE INICIO DE SESIÓN</h1>
    <form method="post">
        <label for="usuario">Usuario:</label>
        <input type="text" name="usuario" id="usuario">

        <label for="clave">Contraseña:</label>
        <input type="password" name="clave" id="clave">

        <label></label>
        <input type="checkbox" name="recordarme">Recordarme
        </label>

        <button type="submit" name="accion" value="iniciar">Iniciar sesión</button>
        <button type="submit" name="accion" value="registrar">Registrarse</button>
    </form>
</body>

</html>