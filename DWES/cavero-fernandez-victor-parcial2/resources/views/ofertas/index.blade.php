@include('layouts.nav')

<h1>Listado de Ofertas</h1>

@if (session('success'))
    <p style="color: green;">{{ session('success') }}</p>
@endif

<table border="1" cellpadding="15" cellspacing="0">
    <thead style="background-color: lightblue;">
        <tr>
            <th>Titulo</th>
            <th>Descripción</th>
            <th>Salario</th>
            <th>Tipo contrato</th>
            <th>Fecha cierre</th>
            <th>Estado</th>
            <th>Empresa ID</th>
        </tr>
    </thead>

    <tbody>
        @foreach ($ofertas as $oferta)
            <tr>
                <td>{{ $oferta->titulo }}</td>
                <td>{{ $oferta->descripcion }}</td>
                <td>{{ $oferta->salario }}</td>
                <td>{{ $oferta->tipo_contrato }}</td>
                <td>{{ $oferta->fecha_cierre }}</td>
                <td>
                    @if ($oferta->estado === 'activa')
                        <span style="color: green;">Activa</span>
                    @elseif($oferta->estado === 'expirada')
                        <span style="color: red;">Expirada</span>
                    @endif
                </td>
                <td>{{ $oferta->empresa->id }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
<div style="margin-top: 20px;">
    {{ $ofertas->links('pagination::bootstrap-4') }}
</div>

@include('layouts.footer')
