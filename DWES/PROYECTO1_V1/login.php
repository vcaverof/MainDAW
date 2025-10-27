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

<body>
    <h2>Inicio de sesión</h2>
    <form method="POST">
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