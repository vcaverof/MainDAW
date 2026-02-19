<nav style="display:flex; justify-content:space-between; align-items:center; padding:15px; background: lightblue;">

    {{-- Enlaces de navegación --}}
    <div style="display:flex; justify-content:center; align-items:center; gap:20px;">
        <h2>PORTAL DE EMPLEO</h2>
        <a href="{{ route('ofertas.index') }}">Listado ofertas</a>
        <a href="{{ route('ofertas.create') }}">Crear oferta</a>
    </div>
</nav>