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
        <h2>DETECTOR DE ANAGRAMAS</h2>
        <form action="detector.php" method="post">
            <label>Cadena de texto 1: </label>
            <input type="text" name="texto1" max="10" placeholder="Máximo 10 caracteres" required>

            <label>Cadena de texto 2: </label>
            <input type="text" name="texto2" max="10" placeholder="Máximo 10 caracteres" required>

            <input type="submit" value="Enviar" name="enviar">
        </form>
    </div>
</body>
</html>