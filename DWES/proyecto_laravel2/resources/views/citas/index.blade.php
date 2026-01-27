@extends('layouts.app')

@section('content')
    <h1>Mis citas</h1>

    @if (session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    <a href="{{ route('citas.create') }}">Crear nueva cita</a>

    <table border="1" cellpadding="5" cellspacing="0" style="margin-top: 20px;">
        <tr>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>

        @foreach ($citas as $cita)
            <tr>
                <td>{{ $cita->cliente->nombre }}</td>
                <td>{{ $cita->servicio->nombre }}</td>
                <td>{{ $cita->fecha }}</td>
                <td>{{ $cita->hora }}</td>
                <td>{{ $cita->estado }}</td>
                <td>
                    <a href="{{ route('citas.edit', $cita) }}">Editar</a>

                    @if ($cita->estado === 'activa')
                        <form action="{{ route('citas.cancel', $cita) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('PUT')
                            <button type="submit">Cancelar</button>
                        </form>
                    @endif

                    @if ($cita->estado === 'cancelada')
                        <form action="{{ route('citas.reactivate', $cita) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('PUT')
                            <button type="submit">Reactivar</button>
                        </form>
                    @endif
                </td>
            </tr>
        @endforeach
    </table>

    <div style="margin-top: 20px;">
        {{ $citas->links() }}
    </div>
@endsection
