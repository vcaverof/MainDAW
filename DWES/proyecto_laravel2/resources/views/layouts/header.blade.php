<div style="background: #eee; padding: 10px; margin-bottom: 20px;">
    @auth
        Usuario: {{ auth()->user()->email }}

        <form action="/logout" method="POST" style="display:inline;">
            @csrf
            <button type="submit">Cerrar sesión</button>
        </form>
    @endauth

    @guest
        <a href="/login">Login</a>
    @endguest
</div>

