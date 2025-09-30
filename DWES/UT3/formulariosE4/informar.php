<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informar</title>
    <style>
        body {
            background-color: #eaf0f7ff;
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 20px;
        }

        .resultado {
            background-color: #76c6ebff;
            max-width: 700px;
            margin: auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-size: 35px;
            text-align: center;
        }
    </style>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $errores = array();

        $divisor = $_POST['divisor'];
        $dividendo = $_POST['dividendo'];

        // Validar el campo DIVISOR
        if (empty($_POST['divisor'])) {
            $errores['divisor'] = "El campo divisor es obligatorio.";
        }

        // Validar el campo DIVIDENDO
        if (empty($_POST['dividendo'])) {
            $errores['dividendo'] = "El campo dividendo es obligatorio.";
        }

        // Si no hay errores, procesar el formulario
        if (empty($errores)) {
            echo '<p class = "resultado"> Resultado de la división: ' . ($divisor / $dividendo) . '</p>';
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
</body>

</html>