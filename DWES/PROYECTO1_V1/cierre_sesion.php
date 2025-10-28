<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cierre de sesión</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
        }

        .mensaje {
            font-size: 20px;
            color: green;
            margin-bottom: 20px;
        }

        a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 500;
        }

        a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <?php if (isset($_GET['logout']) && $_GET['logout'] == 1): ?>
        <p class="mensaje">✅ Has cerrado sesión correctamente.</p>
    <?php endif; ?>

    <a href="login.php">Volver a la página de login</a>
</body>
</html>
