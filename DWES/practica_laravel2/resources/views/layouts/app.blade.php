<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Gestor de Citas</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>

<body>

    {{-- HEADER GLOBAL --}}
    <header style="background: #333; padding: 15px;">
        <nav style="display: flex; gap: 20px;">
            <a href="{{ route('home') }}" style="color: white; text-decoration: none;">Inicio</a>
            <a href="{{ route('citas.index') }}" style="color: white; text-decoration: none;">Citas</a>
            <a href="{{ route('clientes.index') }}" style="color: white; text-decoration: none;">Clientes</a>
            <a href="{{ route('servicios.index') }}" style="color: white; text-decoration: none;">Servicios</a>
        </nav>
    </header>

    <div style="padding: 20px;">
        @yield('content')
    </div>

</body>

</html>
