<?php
// Verifica si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Declara un array para almacenar los errores
    $errores = array();

    // Validar el campo nombre
    if (empty($_POST['nombre'])) {
        $errores['nombre'] = "El campo nombre es obligatorio.";
    }

    // Validar el campo edad
    if (empty($_POST['edad'])) {
        $errores['edad'] = "El campo edad es obligatorio.";
    }

    // Validar el campo email
    if (empty($_POST['email'])) {
        $errores['email'] = "El campo email es obligatorio.";
    }

    // Validar el campo sexo
    if (empty($_POST['sexo'])) {
        $errores['sexo'] = "El campo sexo es obligatorio.";
    }

    // Validar el campo asignaturas
    $comprobarAsignaturas = $_POST['asignaturas'];
    if (empty($comprobarAsignaturas)) {
        $errores['asignaturas'] = "Selecciona al menos un campo de asignaturas";
    }
    // Validar el campo turno
    if (empty($_POST['turno'])) {
        $errores['turno'] = "El campo turno es obligatorio.";
    }

    // Si no hay errores, procesar el formulario
    if (empty($errores)) {
        echo "¡Datos recibidos con éxito! Nombre: $nombre, Edad: $edad, Email: $email";
    } else {
        // Mostrar los errores al usuario
        echo "<ul>";
        foreach ($errores as $campo => $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Formulario para los alumnos</title>
    <style>
        body {
            background-color: #eaf0f7ff;
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 20px;
        }

        .formulario {
            background-color: #ffffff;
            max-width: 700px;
            margin: auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: #2c3e50;
        }

        label {
            display: block;
            margin-top: 15px;
            color: #34495e;
        }

        input,
        textarea {
            width: 97%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
        }

        select {
            width: 17%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
        }

        input[type="submit"] {
            background-color: #3498db;
            color: white;
            border: none;
            margin-top: 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #2980b9;
        }

        .asignaturas-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .asignaturas-grid .asignatura {
            background-color: #e2ecf5ff;
            padding: 10px 14px;
            border-radius: 6px;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            height: 50px;
            box-sizing: border-box;
        }

        .asignatura label {
            font-size: 15px;
            color: #2c3e50;
            margin: 0;
        }

        .asignatura input[type="checkbox"] {
            transform: scale(1.2);
        }

        .turno-group {
            display: flex;
            gap: 20px;
            margin-top: 10px;
        }

        .turno-option {
            background-color: #e2ecf5ff;
            padding: 10px 14px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;
        }

        .turno-option label {
            font-size: 15px;
            color: #2c3e50;
            margin-right: 10px;
        }
    </style>
</head>

<body>
    <div class="formulario">
        <h2>DATOS ALUMNADO 1ºDAM 25/26</h2>
        <form action="" method="post">
            <label>Nombre:</label>
            <input type="text" name="nombre">

            <label>Edad:</label>
            <input type="number" name="edad">

            <label>Email:</label>
            <input type="email" name="email">

            <label>Sexo:</label>
            <select name="sexo">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
            </select>

            <label>Asignaturas 1º DAM:</label>
            <div class="asignaturas-grid">
                <div class="asignatura"><label for="si">Sistemas informáticos</label><input type="checkbox" name="asignaturas[]" value="Sistemas informaticos" id="si"></div>
                <div class="asignatura"><label for="redes">Redes</label><input type="checkbox" name="asignaturas[]" value="Redes" id="redes"></div>
                <div class="asignatura"><label for="prog">Programación</label><input type="checkbox" name="asignaturas[]" value="Programación" id="prog"></div>
                <div class="asignatura"><label for="bd">Bases de datos</label><input type="checkbox" name="asignaturas[]" value="Bases de datos" id="bd"></div>
                <div class="asignatura"><label for="it">Itinerario para la empleabilidad I</label><input type="checkbox" name="asignaturas[]" value="IPE I" id="it"></div>
                <div class="asignatura"><label for="lm">Lenguajes de marcas</label><input type="checkbox" name="asignaturas[]" value="Lenguajes de marcas" id="lm"></div>
                <div class="asignatura"><label for="ent">Entornos de desarrollo</label><input type="checkbox" name="asignaturas[]" value="Entornos de desarrollo" id="ent"></div>
            </div>

            <label>Turno:</label>
            <div class="turno-group">
                <div class="turno-option">
                    <label for="manana">Mañana</label>
                    <input type="radio" name="turno" value="Mañana" id="manana" checked>
                </div>
                <div class="turno-option">
                    <label for="tarde">Tarde</label>
                    <input type="radio" name="turno" value="Tarde" id="tarde">
                </div>
            </div>

            <label>Comentarios:</label>
            <textarea name="comentarios" rows="4"></textarea>

            <input type="submit" value="Enviar" name="enviar">
        </form>
    </div>
</body>

</html>