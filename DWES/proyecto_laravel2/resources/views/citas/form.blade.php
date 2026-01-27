@extends('layouts.app')

@section('content')
    <h1>{{ $cita->id ? 'Editar cita' : 'Crear cita' }}</h1>

    @if ($errors->any())
        <div style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form method="POST" action="{{ $cita->id ? route('citas.update', $cita) : route('citas.store') }}">

        @csrf

        @if ($cita->id)
            @method('PUT')
        @endif

        <label>Cliente:</label><br>
        <select name="cliente_id">
            <option value="">-- Selecciona cliente --</option>
            @foreach ($clientes as $cliente)
                <option value="{{ $cliente->id }}"
                    {{ old('cliente_id', $cita->cliente_id) == $cliente->id ? 'selected' : '' }}>
                    {{ $cliente->nombre }}
                </option>
            @endforeach
        </select><br><br>

        <label>Servicio:</label><br>
        <select name="servicio_id">
            <option value="">-- Selecciona servicio --</option>
            @foreach ($servicios as $servicio)
                <option value="{{ $servicio->id }}"
                    {{ old('servicio_id', $cita->servicio_id) == $servicio->id ? 'selected' : '' }}>
                    {{ $servicio->nombre }}
                </option>
            @endforeach
        </select><br><br>

        <label>Fecha:</label><br>
        <input type="date" name="fecha" value="{{ old('fecha', $cita->fecha) }}"><br><br>

        <label>Hora:</label><br>
        <input type="time" name="hora" value="{{ old('hora', $cita->hora) }}"><br><br>

        <label>Notas (opcional):</label><br>
        <textarea name="notas">{{ old('notas', $cita->notas) }}</textarea><br><br>

        <button type="submit">Guardar</button>
    </form>

@endsection
