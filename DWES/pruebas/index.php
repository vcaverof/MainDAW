<?php
include "conexion.php";
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursos</title>
</head>
<body>
    <h1>Lista de cursos</h1>
    <?php

    //Mostrar los cursos
    $sql = "SELECT * FROM cursos";
    $result = $conn->query($sql);

    $sumaPlazasOcupadas = 0;
    $sumaPlazasDisponibles = 0;
    $sumaPlazasTotales = 0;

    echo "<table>";
    echo "<tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Plazas totales</th>
        <th>Plazas disponibles</th>
        <th></th>
    </tr>";

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        $sumaPlazasDisponibles += $row["plazasDisponibles"];
        $sumaPlazasTotales += $row
    }
    ?>
</body>
</html>