<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda online</title>
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

        label {
            display: block;
            margin-top: 15px;
            color: #34495e;
        }

        input {
            width: 97%;
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

        .items-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .items-grid .items {
            background-color: #e2ecf5ff;
            padding: 10px 14px;
            border-radius: 6px;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            height: 50px;
            box-sizing: border-box;
        }

        .items label {
            font-size: 15px;
            color: #2c3e50;
            margin: 0;
        }

        .items input[type="checkbox"] {
            transform: scale(1.2);
        }
    </style>
</head>

<body>
    <form class=".formulario" action="" method="post">
        <label>Tienda online</label>
        <div class="items-grid">
            <div class="items"><label for="teclado">Teclado - 25€</label><input type="checkbox" name="items[]" value="25" id="teclado"></div>
            <div class="items"><label for="raton">Ratón - 30€</label><input type="checkbox" name="items[]" value="raton" id="30"></div>
            <div class="items"><label for="cascos">Cascos - 60€</label><input type="checkbox" name="items[]" value="cascos" id="60"></div>
            <div class="items"><label for="alfombrilla">Alfombrilla - 10€</label><input type="checkbox" name="items[]" value="10" id="alfombrilla"></div>
        </div>

        <input type="submit" value="Enviar" name="enviar">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $productos = $_POST['items'];

        $array_asocitaivo = [];

        if(!empty($productos)) {
            foreach ($productos as $valor) {
                $array_asocitaivo[$valor] = true;
            }
        }
        
        print_r($array_asocitaivo);
    }
    ?>
</body>

</html>