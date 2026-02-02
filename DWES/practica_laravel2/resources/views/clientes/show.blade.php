@extends('layouts.app')

@section('content')
    <h1>Ficha del cliente: {{ $cliente->nombre }}</h1>

    {{-- Mini-estadísticas --}}
    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
        <div style="padding: 10px; background: #eef; border-radius: 6px;">
            <strong>Total citas:</strong> {{ $total }}
        </div>
        <div style="padding: 10px; background: #efe; border-radius: 6px;">
            <strong>Activas:</strong> {{ $activas }}
        </div>
        <div style="padding: 10px; background: #fee; border-radius: 6px;">
            <strong>Canceladas:</strong> {{ $canceladas }}
        </div>
    </div>

    {{-- Tabla de citas --}}
    <table border="1" cellpadding="8" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Usuario</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($citas as $cita)
                <tr>
                    <td>{{ $cita->servicio->nombre }}</td>
                    <td>{{ $cita->fecha }}</td>
                    <td>{{ $cita->hora }}</td>
                    <td>
                        @if ($cita->estado === 'activa')
                            <span style="color: green;">Activa</span>
                        @elseif($cita->estado === 'cancelada')
                            <span style="color: red;">Cancelada</span>
                        @else
                            <span style="color: blue;">Completada</span>
                        @endif
                    </td>
                    <td>{{ $cita->usuario->name }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
