<?php
// Conexión con PDO
try {
    // Conexión con la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "geografia";

    $pdo = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Parámetros
$provincia = isset($_GET['provincia']) ? strtolower(trim($_GET['provincia'])) : null;
$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
$por_pagina = 25;
$inicio = ($pagina - 1) * $por_pagina;
?>

<!DOCTYPE html>
<html>

<head>
    <title>Buscar Provincia Española</title>
</head>

<body>
    <h1>Buscar Provincia Española</h1>
    <form method="GET" action="">
        <input type="text" name="provincia" placeholder="Introduce una provincia" required>
        <button type="submit">Buscar</button>
    </form>

    <?php
    if ($provincia) {
        // Buscar provincia (insensible a mayúsculas)
        $stmt = $pdo->prepare("SELECT n_provincia FROM provincias WHERE LOWER(nombre) = ?");
        $stmt->execute([$provincia]);
        $provincia_data = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$provincia_data) {
            echo "<p>La provincia no existe.</p>";
        } else {
            $provincia_id = $provincia_data['n_provincia'];

            // Total de localidades
            $stmt_total = $pdo->prepare("SELECT COUNT(*) FROM localidades WHERE n_provincia = ?");
            $stmt_total->execute([$provincia_id]);
            $total = $stmt_total->fetchColumn();
            $total_paginas = ceil($total / $por_pagina);

            // Localidades paginadas
            $stmt_localidades = $pdo->prepare("SELECT nombre FROM localidades WHERE n_provincia = ? ORDER BY nombre ASC LIMIT $inicio, $por_pagina");
            $stmt_localidades->execute([$provincia_id]);
            $localidades = $stmt_localidades->fetchAll(PDO::FETCH_ASSOC);

            echo "<h2>Localidades de " . ucfirst($provincia) . "</h2><ul>";
            foreach ($localidades as $loc) {
                echo "<li>" . ($loc['nombre']) . "</li>";
            }
            echo "</ul>";

            // Navegación
            echo "<div>";
            if ($pagina > 1) {
                echo "<a href='?provincia=$provincia&pagina=" . ($pagina - 1) . "'>Anterior</a> ";
            }
            for ($i = 1; $i <= $total_paginas; $i++) {
                echo "<a href='?provincia=$provincia&pagina=$i'>$i</a> ";
            }
            if ($pagina < $total_paginas) {
                echo "<a href='?provincia=$provincia&pagina=" . ($pagina + 1) . "'>Siguiente</a>";
            }
            echo "</div>";
        }
    }
    ?>

</body>

</html>