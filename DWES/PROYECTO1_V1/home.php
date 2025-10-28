<!-- INTERFAZ -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Categorías</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h2 {
            color: #333;
            margin-bottom: 30px;
        }

        .categorias {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 100%;
            max-width: 400px;
        }

        .categorias a {
            text-decoration: none;
            background-color: #007BFF;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            text-align: center;
            font-weight: 500;
            transition: background-color 0.3s ease;
        }

        .categorias a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <?php include 'nav.php'; ?>
    <h2>Lista de categorías</h2>
    <div class="categorias">
        <a href="productos.php?categoria=1">Bebidas con alcohol</a>
        <a href="productos.php?categoria=2">Bebidas sin alcohol</a>
        <a href="productos.php?categoria=3">Comida</a>
    </div>
</body>
</html>

