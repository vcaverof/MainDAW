<?php
session_start();
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $email = $_POST['email'];
    $clave = $_POST['clave'];
    $recordarme = isset($_POST['recordarme']);

    // Buscar usuario por email
    $sql = "SELECT * FROM restaurantes WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$email]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result && password_verify($clave, $result['clave'])) {
        $_SESSION['id_restaurante'] = $result['id'];
        $_SESSION['email'] = $result['email'];

        // Si el usuario marcó "Recordarme"
        if ($recordarme) {
            $token = bin2hex(random_bytes(32));
            $expira = time() + (30 * 24 * 60 * 60); // 30 días

            // Guardar token en la base de datos
            $sql = "UPDATE restaurantes SET remember_token = ?, remember_expira = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->execute([$token, date('Y-m-d H:i:s', $expira), $result['id']]);

            // Crear cookie segura
            setcookie(
                'remember_me',
                $token,
                [
                    'expires' => $expira,
                    'path' => '/',
                    'secure' => true,
                    'httponly' => true,
                    'samesite' => 'Strict'
                ]
            );
        }

        header("Location: home.php");
        exit();
    } else {
        echo "<p style='color:red;'>Usuario o contraseña incorrectos.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Inicio de sesión</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        form {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 300px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        label {
            display: block;
            margin-top: 15px;
            color: #555;
        }

        input[type="text"],
        input[type="password"] {
            width: 92%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input[type="checkbox"] {
            margin-right: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            margin-top: 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        p {
            text-align: center;
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <form method="POST">
        <h2>Inicio de sesión</h2>
        <label>Email:</label>
        <input type="text" name="email" required>

        <label>Contraseña:</label>
        <input type="password" name="clave" required>

        <label>
            <input type="checkbox" name="recordarme"> Recordarme
        </label>

        <button type="submit">Iniciar sesión</button>
    </form>
</body>
