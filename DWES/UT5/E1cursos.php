<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexion a base de datos "Cursos"</title>
</head>

<body>
    <h1>Lista de cursos</h1>

    <!-- Conexion con la base de datos -->
    <?php
    // Conexión con la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "cursos";
    try {
        // Crear conexión usando PDO
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        // Configurar el modo de errores para que lance excepciones
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // Ejecutar una consulta SELECT
        $sql = "SELECT * FROM cursos";
        $sql2 = "SELECT sum(plazasOcupadas) FROM cursos";
        $result = $conn->query($sql); // query() ejecuta directamente la consulta SQL
        // Verificar si la consulta fue exitosa
        if ($result) {
            // Comenzar la tabla
            echo "<table cellpadding='5' cellspacing='0' style='text-align: center'>";
            echo "<tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Plazas Disponibles</th>
                <th>Plazas Ocupadas</th>
              </tr>";

            // Mostrar cada fila como una fila de tabla
            while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                $sumaPlazasOcupadas = 0;
                $sumaPlazasOcupadas = $sumaPlazasOcupadas + $row["plazasOcupadas"];

                $sumapPlazasOfertadas = 0;
                $sumapPlazasOfertadas = $sumapPlazasOfertadas + $row["plazasOcupadas"] + $row["plazasDisponibles"];

                // Verificar si plazasDisponibles es 0
                $plazasDisponibles = ($row["plazasDisponibles"] == 0)
                    ? "<s>" . $row["plazasDisponibles"] . "</s>"
                    : $row["plazasDisponibles"];

                $nombre = ($row["plazasDisponibles"] == 0)
                    ? "<s>" . $row["nombre"] . "</s>"
                    : $row["nombre"];

                echo "<tr>
                    <td>" . ($row["id"]) . "</td>
                    <td>" . $nombre . "</td>
                    <td>" . $plazasDisponibles . "</td>
                    <td>" . ($row["plazasOcupadas"]) . "</td>
                </tr>";

               
            }

            // Cerrar la tabla
            echo "</table>";

            echo "<h2>Resumen de ocupación</h2>";
            echo "Plazas totales ofertadas: " . $sumapPlazasOfertadas ;
            echo "Plazas ocupadas: " . $sumaPlazasOcupadas . "<br>";
            echo "Porcentaje de ocupación: ";
        } else {
            echo "Error en la consulta.";
        }

        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    ?>




</body>

</html>