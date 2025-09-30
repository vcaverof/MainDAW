<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de divisiones</title>
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
            width: 50%;
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
    </style>
</head>

<body>
    <form class="formulario" action="./informar.php" method="post">
        <h1>Calculadora de divisiones</h1>
        <h3>Introduce un divisor y un dividendo</h3>

        <label>Divisor: </label>
        <input type="text" name="divisor" min="1" max="999">

        <label>Dividendo: </label>
        <input type="text" name="dividendo" min="0" max="999">

        <input type="submit" value="Enviar" name="enviar">
    </form>
</body>

</html>