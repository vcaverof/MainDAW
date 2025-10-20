<?php
// Comprobar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["idioma"])) {
    // Guardar la cookie por 7 días
    setcookie("idioma", $_POST["idioma"], time() + (7 * 24 * 60 * 60));
    header("Location: " . $_SERVER["PHP_SELF"]);
    exit;
}

// Comprobar si la cookie existe
$idiomaGuardado = isset($_COOKIE["idioma"]) ? $_COOKIE["idioma"] : null;
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Seleccionar idioma</title>
</head>

<body>
    <?php if ($idiomaGuardado): ?>
        <?php if ($idiomaGuardado == "es"): ?>
            <h1>¡Bienvenido!</h1>
            <p>Has seleccionado Español como tu idioma preferido.</p>
        <?php elseif ($idiomaGuardado == "en"): ?>
            <h1>Welcome!</h1>
            <p>You have selected English as your preferred language.</p>
        <?php else: ?>
            <p>Idioma no reconocido.</p>
        <?php endif; ?>
        <p><a href="?borrar=1">Cambiar idiomas</a></p>
        <?php
        // Opción para borrar la cookie y volver al formulario
        if (isset($_GET["borrar"])) {
            setcookie("idioma", "", time() - 3600); // Expira en el pasado
            header("Location: " . $_SERVER["PHP_SELF"]);
            exit;
        }
        ?>
    <?php else: ?>
        <h2>Selecciona tu idioma preferido:</h2>
        <form method="post" action="">
            <label>
                <input type="radio" name="idioma" value="es" required> Español
            </label><br>
            <label>
                <input type="radio" name="idioma" value="en" required> Inglés
            </label><br><br>
            <button type="submit">Guardar idioma</button>
        </form>
    <?php endif; ?>
</body>

</html>