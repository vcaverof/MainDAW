<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cerrar Sesion</title>
</head>
<body>
    <?php if(isset($_GET['logout']) && ($_GET['logout']) == 1) : ?>
        <p>✅ Has cerrado sesión correctamente</p>
    <?php endif; ?>

    <a href="login.php">Volver a la página de inicio de sesión</a>
</body>
</html>