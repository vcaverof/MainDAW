<?php

//Comprobar si se ha cerrado sesion
if (isset($_GET['logout']) && $_GET['logout'] == 1) {
    echo "<p style='color: green;'>Has cerrado sesión correctamente.</p>";

}

echo "<a href='login.php'>Volver a la página de login</a>";


?>s