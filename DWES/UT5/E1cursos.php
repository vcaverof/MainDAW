<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Conexión a base de datos "Cursos"</title>
</head>

<body>
    <h1>Lista de cursos</h1>

    <?php
    // Conexión con la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "cursos";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Si se ha enviado el formulario para añadir plaza
        if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["id"])) {
            $id = $_POST["id"];

            // Verificar plazas disponibles
            $checkSql = "SELECT plazasDisponibles FROM cursos WHERE id = :id";
            $checkStmt = $conn->prepare($checkSql);
            $checkStmt->bindParam(":id", $id, PDO::PARAM_INT);
            $checkStmt->execute();
            $plazas = $checkStmt->fetchColumn();

            if ($plazas > 0) {
                $sql = "UPDATE cursos 
                        SET plazasDisponibles = plazasDisponibles - 1 
                        WHERE id = :id";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(":id", $id, PDO::PARAM_INT);
                $stmt->execute();
            }

            // Redirigir para evitar doble envío
            header("Location: " . $_SERVER['PHP_SELF']);
            exit;
        }

        // Consulta para mostrar los cursos
        $sql = "SELECT * FROM cursos";
        $result = $conn->query($sql);

        // Variables para resumen
        $sumaPlazasOcupadas = 0;
        $sumaPlazasDisponibles = 0;
        $sumaplazasTotales = 0;

        echo "<table cellpadding='5' cellspacing='0' style='text-align: center'>";
        echo "<tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Plazas Disponibles</th>
                <th>Plazas Totales</th>
                <th>Acción</th>
              </tr>";

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            $sumaPlazasDisponibles += $row["plazasDisponibles"];
            $sumaplazasTotales += $row["plazasTotales"];

            $plazasDisponibles = ($row["plazasDisponibles"] == 0)
                ? "<s>" . $row["plazasDisponibles"] . "</s>"
                : $row["plazasDisponibles"];

            $nombre = ($row["plazasDisponibles"] == 0)
                ? "<s>" . $row["nombre"] . "</s>"
                : $row["nombre"];

            echo "<tr>
                    <td>{$row['id']}</td>
                    <td>{$nombre}</td>
                    <td>{$plazasDisponibles}</td>
                    <td>{$row['plazasTotales']}</td>
                    <td>
                        <form method='POST'>
                            <input type='hidden' name='id' value='{$row['id']}'>
                            <input type='submit' value='Añadir plaza' " . ($row["plazasDisponibles"] == 0 ? "disabled" : "") . ">
                        </form>
                    </td>
                  </tr>";
        }

        $sumaPlazasOcupadas += ($sumaplazasTotales - $sumaPlazasDisponibles);
        $porcentajeOcupacion = (($sumaplazasTotales - $sumaPlazasDisponibles) / $sumaplazasTotales) * 100;

        echo "</table>";

        echo "<h2>Resumen de ocupación</h2>";
        echo "Plazas totales ofertadas: " . $sumaplazasTotales . "<br>";
        echo "Plazas ocupadas: " . $sumaPlazasOcupadas . "<br>";
        echo "Porcentaje de ocupación: " . number_format($porcentajeOcupacion, 2) . "%";

        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    ?>
</body>

</html>