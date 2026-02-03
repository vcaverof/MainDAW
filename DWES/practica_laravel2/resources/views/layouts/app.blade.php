<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Gestor de Citas</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>

<body>

    {{-- HEADER GLOBAL --}}
    <header style="background: #333; padding-top: 25px;">
        <nav style="display: flex; gap: 20px;">
            <a href="{{ route('home') }}" style="color: white; text-decoration: none;">Inicio</a>
            <a href="{{ route('citas.index') }}" style="color: white; text-decoration: none;">Citas</a>
            <a href="{{ route('clientes.index') }}" style="color: white; text-decoration: none;">Clientes</a>
            <a href="{{ route('servicios.index') }}" style="color: white; text-decoration: none;">Servicios</a>

            <div style="color: white; margin-left: 63%;">
                @auth
                    Usuario: {{ auth()->user()->email }}
                    <form action="/logout" method="POST" style="display:inline;">
                        @csrf
                        <button type="submit" class="btn-danger">Cerrar sesión</button>
                    </form>
                @endauth

                @guest
                    <a href="/login">Login</a>
                @endguest
            </div>
        </nav>
    </header>

    <div style="padding: 20px;">
        @yield('content')
    </div>

</body>

</html>
