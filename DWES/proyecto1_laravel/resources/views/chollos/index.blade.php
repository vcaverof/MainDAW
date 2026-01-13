<h1>Listado de chollos</h1>

<ul>
@foreach ($chollos as $chollo)
    <li>
    {{ $chollo->titulo }}
    — {{ $chollo->precio_descuento }} €
    — Categoría: {{ $chollo->categoria?->nombre ?? 'Sin categoría' }}
</li>

@endforeach
</ul>
