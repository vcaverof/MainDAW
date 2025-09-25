<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Respuesta</title>
</head>

<body>
    <?php
    if (isset($_POST["enviar"])) {
        if (empty($_POST["nombre"])) {
            echo "El campo nombre está vacio"; 
        } else {
             echo "Nombre:" . $_POST["nombre"];
        }
    } else {
    ?>
        <form action="" method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre">
            <input type="submit" name="enviar" value="Enviar">
        </form>
    <?php
    }
    ?>
</body>

</html>