@extends('layouts.app')

@section('content')
    <h1>Servicios</h1>

    @if (session('success'))
        <p style="color: green;">{{ session('success') }}</p><br>
    @endif

    <a href="{{ route('servicios.create') }}" class="btn btn-primary">
        Crear nuevo servicio
    </a>

    <table border="1" cellpadding="5" cellspacing="0" style="margin-top: 20px;">
        <tr>
            <th>Nombre</th>
            <th>Duración (min)</th>
            <th>Precio (€)</th>
            <th>Activo</th>
            <th>Acciones</th>
        </tr>

        @foreach ($servicios as $servicio)
            <tr>
                <td>{{ $servicio->nombre }}</td>
                <td>{{ $servicio->duracion_minutos }}</td>
                <td>{{ $servicio->precio }}</td>
                <td>{{ $servicio->activo ? 'Sí' : 'No' }}</td>
                <td>
                    <form action="{{ route('servicios.edit', $servicio) }}" method="GET" style="display:inline;">
                        @csrf
                        @method('GET')
                        <button type="submit" class="btn btn-secondary">Editar</button>
                    </form>

                    <form action="{{ route('servicios.toggle', $servicio) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('PUT')
                        <button type="submit">
                            {{ $servicio->activo ? 'Archivar' : 'Reactivar' }}
                        </button>
                    </form>
                </td>
            </tr>
        @endforeach
    </table>

    <div style="margin-top: 20px;">
        {{ $servicios->links() }}
    </div>
@endsection
