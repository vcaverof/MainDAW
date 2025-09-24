<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Datos Recibidos</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f1f8e9;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 25px;
            border-radius: 10px;
            max-width: 600px;
            margin: auto;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h2 {
            text-align: center;
            color: #558b2f;
        }
        p {
            margin: 10px 0;
            color: #33691e;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Datos del Alumno</h2>
        <p><strong>Nombre:</strong> <?php echo $_POST["nombre"]; ?></p>
        <p><strong>Edad:</strong> <?php echo $_POST["edad"]; ?></p>
        <p><strong>Email:</strong> <?php echo $_POST["email"]; ?></p>
        <p><strong>Fecha de nacimiento:</strong> <?php echo $_POST["nacimiento"]; ?></p>
        <p><strong>Sexo:</strong> <?php echo $_POST["sexo"]; ?></p>
        <p><strong>Curso académico:</strong> <?php echo $_POST["curso"]; ?></p>
        <p><strong>Asignaturas favoritas:</strong>
            <?php
                if (!empty($_POST["asignaturas"])) {
                    echo implode(", ", $_POST["asignaturas"]);
                } else {
                    echo "Ninguna seleccionada";
                }
            ?>
        </p>
        <p><strong>Turno:</strong> <?php echo $_POST["turno"]; ?></p>
        <p><strong>Comentarios:</strong> <?php echo nl2br($_POST["comentarios"]); ?></p>
    </div>
</body>
</html>