<?php
include 'conexion.php';

//Comprobar si se ha cerrado sesión
if (isset($_GET['logout']) && $_GET['logout'] == true) {
    session_start();
    session_unset(); //Eliminar las variables internas de la sesion
    session_destroy(); //Destruye la sesion

    header("Location: cierre_sesion.php?logout=1");
    exit();
}


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



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Panel de navegación</title>
    <style>
        .navbar {
            background-color: #ffffff;
            padding: 15px 25px;
            border-bottom: 2px solid #e0e0e0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            font-family: 'Segoe UI', sans-serif;
        }

        .navbar p {
            margin: 0;
            font-size: 16px;
            color: #333;
        }

        .navbar strong {
            color: #007BFF;
        }

        .navbar nav {
            margin-top: 10px;
        }

        .navbar a {
            text-decoration: none;
            color: #007BFF;
            margin-right: 15px;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .navbar a:hover {
            color: #0056b3;
        }

        hr {
            margin-top: 15px;
            border: none;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <p>Usuario: <strong><?php echo $_SESSION['email'] ?></strong></p>
        <nav>
            <a href="home.php">Home</a>
            <a href="carrito.php">Ver carrito</a>
            <a href="home.php?logout=true">Cerrar Sesión</a>
        </nav>
        <hr>
    </div>
</body>
</html>
