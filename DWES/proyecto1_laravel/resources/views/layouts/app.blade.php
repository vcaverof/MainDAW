<!DOCTYPE html>
<html lang="es">
<link rel="stylesheet" href="/css/estilos.css">


<head>
    <meta charset="UTF-8">
    <title>Chollos</title>
    <style>
        /* Barra superior */
        .navbar {
            background: #333;
            color: white;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .navbar img {
            height: 40px;
        }

        .navbar a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        .navbar a:hover {
            text-decoration: underline;
        }

        /* Contenido principal */
        .content {
            padding: 20px;
        }
    </style>
</head>

<body>

    <!-- Menú superior -->
    <div class="navbar">
        <img src="/logo.png" alt="Logo">

        <a href="/">Inicio</a>
        <a href="/nuevos">Nuevos</a>
        <a href="/destacados">Destacados</a>
    </div>

    <!-- Contenido de cada vista -->
    <div class="content">
        @yield('content')
    </div>

    <!-- Pie de página -->
    <div class="footer">
        <p>Víctor Cavero Fernández ©Chollos 2025</p>
    </div>


</body>

</html>
