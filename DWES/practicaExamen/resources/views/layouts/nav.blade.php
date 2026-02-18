<nav style="display:flex; justify-content:space-between; align-items:center; padding:15px; background:#f5f5f5;">

    {{-- Enlaces de navegación --}}
    <div style="display:flex; gap:20px;">
        <a href="{{ url('/') }}">Inicio</a>
        <a href="{{ route('estudiantes.index') }}">Estudiantes</a>
        <a href="{{ route('cursos.index') }}">Cursos</a>
    </div>

    {{-- Información del usuario + logout --}}
    <div style="display:flex; align-items:center; gap:15px;">

        {{-- Datos del usuario logueado --}}
        @auth
        <div>
            <strong>{{ Auth::user()->name }}</strong><br>
            <small>{{ Auth::user()->email }}</small>
        </div>

        {{-- Botón de cerrar sesión --}}
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" style="background:#e63946; color:white; border:none; padding:8px 12px; cursor:pointer;">
                Cerrar sesión
            </button>
        </form>
        @endauth

        {{-- Si no está logueado --}}
        @guest
        <a href="{{ route('login') }}">Iniciar sesión</a>
        <a href="{{ route('register') }}">Registrarse</a>
        @endguest

    </div>
</nav>