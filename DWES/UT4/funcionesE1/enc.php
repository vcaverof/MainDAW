<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

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
    <div class="resultado">
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $caracteresCadena = str_split($_POST['texto']);
            $numero = intval($_POST['numero']); // Aseguramos que sea número

            if ($_POST['enc'] == "encriptar") {
                $encriptado = [];
                foreach ($caracteresCadena as $caracter) {
                    $encriptado[] = chr(ord($caracter) + $numero);
                }
                echo "El texto encriptado es: " . implode("", $encriptado);
            } else {
                $desencriptado = [];
                foreach ($caracteresCadena as $caracter) {
                    $desencriptado[] = chr(ord($caracter) - $numero);
                }
                echo "El texto desencriptado es: " . implode("", $desencriptado);
            }
        }
        ?>
    </div>
</body>

</html>