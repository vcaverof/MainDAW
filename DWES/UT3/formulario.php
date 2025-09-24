<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Alumno</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #e0f7fa, #80deea);
            margin: 0;
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
            color: #00796b;
        }
        label {
            display: block;
            margin-top: 15px;
            color: #004d40;
        }
        input, select, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #b2dfdb;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #00796b;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 20px;
        }
        input[type="submit"]:hover {
            background-color: #004d40;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Formulario de Datos del Alumno</h2>
        <form action="visor1.php" method="post" enctype="multipart/form-data">
            <label>Nombre:</label>
            <input type="text" name="nombre" required>

            <label>Edad:</label>
            <input type="number" name="edad" min="1" max="120" required>

            <label>Correo electrónico:</label>
            <input type="email" name="email" required>

            <label>Fecha de nacimiento:</label>
            <input type="date" name="nacimiento">

            <label>Sexo:</label>
            <select name="sexo">
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
            </select>

            <label>Curso académico:</label>
            <input type="text" name="curso">

            <label>Asignaturas favoritas:</label>
            <input type="checkbox" name="asignaturas[]" value="Matemáticas"> Matemáticas
            <input type="checkbox" name="asignaturas[]" value="Lengua"> Lengua
            <input type="checkbox" name="asignaturas[]" value="Historia"> Historia
            <input type="checkbox" name="asignaturas[]" value="Ciencias"> Ciencias

            <label>Turno:</label>
            <input type="radio" name="turno" value="Mañana" checked> Mañana
            <input type="radio" name="turno" value="Tarde"> Tarde

            <label>Comentarios adicionales:</label>
            <textarea name="comentarios" rows="4"></textarea>

            <label>Sube tu foto:</label>
            <input type="file" name="foto" accept="image/*">

            <input type="submit" value="Enviar">
        </form>
    </div>
</body>
</html>