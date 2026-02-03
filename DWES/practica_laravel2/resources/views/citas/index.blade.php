@extends('layouts.app')

@section('content')
    <h1>Mis citas</h1>

    {{-- MOSTRAR ERRORES --}}
    @if ($errors->any())
        <div style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    @if (session('success'))
        <p style="color: green;">{{ session('success') }}</p><br>
    @endif

    <a href="{{ route('citas.create') }}" class="btn btn-primary">
        Crear nueva cita
    </a>

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
                <td>
                    @if ($cita->estado === 'activa')
                        <span style="color: green;">Activa</span>
                    @elseif($cita->estado === 'cancelada')
                        <span style="color: red;">Cancelada</span>
                    @else
                        <span style="color: blue;">Completada</span>
                    @endif
                </td>
                <td>
                    @if ($cita->estado === 'activa')
                        <form action="{{ route('citas.edit', $cita) }}" method="GET" style="display:inline;">
                            @csrf
                            @method('GET')
                            <button type="submit" class="btn btn-secondary">Editar</button>
                        </form>
                        <form action="{{ route('citas.cancel', $cita) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('PUT')
                            <button type="submit">Cancelar</button>
                        </form>
                    @elseif($cita->estado === 'cancelada')
                        <button disabled style="opacity: 0.5;">Editar</button>
                    @elseif($cita->estado === 'completada')
                        <button disabled style="opacity: 0.5;">Completada</button>
                    @endif
                </td>
            </tr>
        @endforeach
    </table>

    <div style="margin-top: 20px;">
        {{ $citas->links() }}
    </div>
@endsection
