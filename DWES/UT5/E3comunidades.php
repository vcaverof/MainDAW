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

//Comprobar que formularios se han enviado y cuales no
$mostrar_formulario2 = isset($_POST['form1_submit']) || isset($_POST['form2_submit']) || isset($_POST['form3_submit']);
$mostrar_formulario3 = isset($_POST['form2_submit']) || isset($_POST['form3_submit']);


// Comprobar que se ha seleccionado el dato en el form, y pasarlo a minusculas sin espacios
$comunidad = isset($_POST['comunidad']) ? strtolower(trim($_POST['comunidad'])) : null;
$provincia = isset($_POST['provincia']) ? strtolower(trim($_POST['provincia'])) : null;
$localidad = isset($_POST['localidad']) ? strtolower(trim($_POST['localidad'])) : null;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['form1_submit'])) {
        //Procesar formulario 1
        $comunidad = $_POST['comunidad'];
    } elseif (isset($_POST['form2_submit'])) {
        //Procesar el formulario 2
        $provincia = $_POST['provincia'];
    } elseif (isset($_POST['form3_submit'])) {
        //Procesar el formulario 3
        $localidad = isset($_POST['localidad']);
    }
}

//Consulta para las comunidades
$comunidad_data = $pdo->query("SELECT id_comunidad, nombre FROM comunidades");

//Consulta para las provincias
$provincia_data = null;
if ($mostrar_formulario2) {
    $comunidad_id = $_POST['comunidad'];
    $stmt = $pdo->prepare("SELECT n_provincia, nombre FROM provincias WHERE id_comunidad = ?");
    $stmt->execute([$comunidad_id]);
    $provincia_data = $stmt;
}

//Consulta para las localidades
$localidad_data = null;
if ($mostrar_formulario3) {
    $n_provincia = $_POST['provincia'];
    $localidad_conn = "SELECT id_localidad, nombre FROM localidades WHERE n_provincia = ?";
    $stmt = $pdo->prepare($localidad_conn);
    $stmt->execute([$n_provincia]);
    $localidad_data = $stmt;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Buscar Población de las Localidades Españolas</title>
</head>
<body>
    <h1>Buscar Localidades Españolas</h1>
    <?php if (!$mostrar_formulario2 && !$mostrar_formulario3) : ?>
        <form method="POST" action="">
            <select name="comunidad" id="comunidad">
                <?php while ($fila = $comunidad_data->fetch(PDO::FETCH_ASSOC)): ?>
                    <option value="<?php echo $fila['id_comunidad']; ?>"><?= $fila['nombre'] ?></option>
                <?php endwhile; ?>
            </select>
            <button type="submit" name="form1_submit" value="Enviar formulario 1">Buscar</button>
        </form>

    <?php elseif (!$mostrar_formulario3) : ?>
        <form method="POST" action="">
            <select name="provincia" id="provincia">
                <?php while ($fila = $provincia_data->fetch(PDO::FETCH_ASSOC)): ?>
                    <option value="<?php echo $fila['n_provincia']; ?>"><?= $fila['nombre'] ?></option>
                <?php endwhile; ?>
            </select>
            <input type="hidden" name="comunidad" value="<?= htmlspecialchars($comunidad) ?>">
            <button type="submit" name="form2_submit" value="Enviar formulario 2">Buscar</button>
        </form>

    <?php else : ?>
        <form method="POST" action="">
            <select name="localidad" id="localidad">
                <?php while ($fila = $localidad_data->fetch(PDO::FETCH_ASSOC)): ?>
                    <option value="<?php echo $fila['id_localidad']; ?>"><?= $fila['nombre'] ?></option>
                <?php endwhile; ?>
            </select>
            <button type="submit" name="form3_submit" value="Enviar formulario 3">Buscar</button>
            <input type="hidden" name="comunidad" value="<?= htmlspecialchars($comunidad) ?>">
            <input type="hidden" name="provincia" value="<?= htmlspecialchars($provincia) ?>">
        </form>
        
        <!-- Mostrar la población de la localidad seleccionada mediante una consulta en la base de datos -->
        <?php
        if (isset($_POST['form3_submit'])) { //Comprueba que se haya procesado el formulario 3
            $id_localidad = $_POST['localidad'];

            $stmt = $pdo->prepare("SELECT nombre, poblacion FROM localidades WHERE id_localidad = ?");
            $stmt->execute([$id_localidad]);
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($resultado) {
                $nombre_localidad = $resultado['nombre'];
                $poblacion = $resultado['poblacion'];
                echo "<p>La localidad <strong>{$nombre_localidad}</strong> tiene una población de <strong>{$poblacion}</strong> habitantes.</p>";
            } else {
                echo "<p>No se encontró la población para la localidad seleccionada.</p>";
            }
        }
        ?>
    <?php endif; ?>
</body>

</html>