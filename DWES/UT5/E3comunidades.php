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

//Mostrar formulario 2 si se ha enviado el 1
$mostrar_formulario2 = isset($_POST['form1_submit']) && !empty($_POST['comunidad']);

$M

// Parámetros
$comunidad = isset($_POST['comunidad']) ? strtolower(trim($_POST['comunidad'])) : null;
$provincia = isset($_POST['provincia']) ? strtolower(trim($_POST['provincia'])) : null;
$localidad = isset($_POST['localidad']) ? strlower(trim($_POST['localidad'])) : null;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['form1_submit'])) {
        //Procesar formulario 1
        $comunidad = $_POST['comunidad'];
    } elseif (isset($_POST['form2_submit'])) {
        //Procesar el formulario 2
        $provincia = $_POST['provincia'];
    }
}

//Consulta para las comunidades
$comunidad_data = $pdo->query("SELECT id_comunidad, nombre FROM comunidades");

$provincia_data = null;
if ($mostrar_formulario2) {
    $comunidad_id = $_POST['comunidad'];
    $provincia_conn = "SELECT n_provincia, nombre FROM provincias WHERE id_comunidad = ?";
    $stmt = $pdo->prepare($provincia_conn);
    $stmt->execute([$comunidad_id]);
    $provincia_data = $stmt;
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Buscar Provincia Española</title>
</head>

<body>
    <h1>Buscar Localidades Españolas</h1>
    <?php if (!$mostrar_formulario2) : ?>
        <form method="POST" action="">
            <select name="comunidad" id="comunidad">
                <?php while ($fila = $comunidad_data->fetch(PDO::FETCH_ASSOC)): ?>
                    <option value="<?php echo $fila['id_comunidad']; ?>"><?= $fila['nombre'] ?></option>
                <?php endwhile; ?>
            </select>
            <button type="submit" name="form1_submit" value="Enviar formulario 1">Buscar</button>
        </form>

    <?php else : ?>
        <form method="POST" action="">
            <select name="provincia" id="provincia">
                <?php while ($fila = $provincia_data->fetch(PDO::FETCH_ASSOC)): ?>
                    <option value="<?php echo $fila['n_provincia']; ?>"><?= $fila['nombre'] ?></option>
                <?php endwhile; ?>
            </select>
            <input type="hidden" name="comunidad" value="<?= htmlspecialchars($comunidad) ?>">
            <button type="submit" name="form2_submit" value="Enviar formulario 2">Buscar</button>
        </form>
    <?php endif; ?>

</body>

</html>