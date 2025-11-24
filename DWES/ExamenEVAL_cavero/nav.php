<?php
session_start();

//Comprobar si han cerrado la sesión desde el nav
if (isset($_GET['logout']) && $_GET['logout'] == true) {
    setcookie("remember");
    session_start();
    session_unset();
    session_destroy();

    header("Location: login.php");
    exit();
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
    <p>Usuario: <?php echo $_SESSION['email'] ?></p>
    <a href="nav.php?logout=true">Cerrar sesión</a>
</body>

</html>