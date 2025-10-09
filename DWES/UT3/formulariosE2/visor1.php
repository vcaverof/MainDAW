<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Datos Recibidos</title>
    <style>
        body {
            background-color: #eaf2f8;
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 20px;
        }
        .visor {
            background-color: #ffffff;
            max-width: 600px;
            margin: auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        h2 {
            text-align: center;
            color: #2c3e50;
        }
        p {
            margin: 10px 0;
            color: #34495e;
        }
    </style>
</head>
<body>
    <div class="visor">
        <h2>Datos Recibidos</h2>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            echo "<p><strong>Nombre:</strong> " . ($_POST["nombre"]) . "</p>";
            echo "<p><strong>Edad:</strong> " . ($_POST["edad"]) . "</p>";
            echo "<p><strong>Email:</strong> " . ($_POST["email"]) . "</p>";
            echo "<p><strong>Sexo:</strong> " . ($_POST["sexo"]) . "</p>";

            echo "<p><strong>Asignaturas favoritas:</strong><br>";
            if (!empty($_POST["asignaturas"])) {
                echo "<ul>";
                foreach ($_POST["asignaturas"] as $asignatura) {
                    echo "<li>" . ($asignatura) . "</li>";
                }
                echo "</ul>";
            } else {
                echo "Ninguna seleccionada";
            }
            echo "</p>";

            echo "<p><strong>Turno:</strong> " . ($_POST["turno"]) . "</p>";
            echo "<p><strong>Comentarios:</strong> " . nl2br(($_POST["comentarios"])) . "</p>";
        } else {
            echo "<p>No se han enviado datos.</p>";
        }
        ?>
    </div>
</body>
</html>
