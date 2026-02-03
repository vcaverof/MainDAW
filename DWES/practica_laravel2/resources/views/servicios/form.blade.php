@extends('layouts.app')

@section('content')
    <h1>{{ $servicio->id ? 'Editar servicio' : 'Crear servicio' }}</h1>

    @if ($errors->any())
        <div style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form method="POST" action="{{ $servicio->id ? route('servicios.update', $servicio) : route('servicios.store') }}">

        @csrf

        @if ($servicio->id)
            @method('PUT')
        @endif

        <label>Nombre:</label><br>
        <input type="text" name="nombre" value="{{ old('nombre', $servicio->nombre) }}"><br><br>

        <label>Duración (minutos):</label><br>
        <input type="number" name="duracion_minutos"
            value="{{ old('duracion_minutos', $servicio->duracion_minutos) }}"><br><br>

        <label>Precio (€):</label><br>
        <input type="text" name="precio" value="{{ old('precio', $servicio->precio) }}"><br><br>

        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>

@endsection
