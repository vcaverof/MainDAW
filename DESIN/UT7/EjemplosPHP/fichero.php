<?php
$fichero_subido = 'C:\\Users\\victor.cavfer\\Desktop\\MainDAW-1\\DESIN\\UT7\\EjemplosPHP' . basename($_FILES['mifichero']['name']);
if(move_uploaded_file($_FILES['mifichero']['tmp_name'], $fichero_subido)) {
    echo "<h1>Se ha subido el fichero " . $fichero_subido . "</h1>";
} else {
    echo "<h1>Error</h1>";
}




?>