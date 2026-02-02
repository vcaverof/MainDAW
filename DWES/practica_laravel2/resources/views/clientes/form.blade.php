@extends('layouts.app')

@section('content')
    <h1>{{ $cliente->id ? 'Editar cliente' : 'Crear cliente' }}</h1>

    @if ($errors->any())
        <div style="color: red;">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form method="POST" action="{{ $cliente->id ? route('clientes.update', $cliente) : route('clientes.store') }}">

        @csrf

        @if ($cliente->id)
            @method('PUT')
        @endif

        <label>Nombre:</label>
        <input type="text" name="nombre" value="{{ old('nombre', $cliente->nombre) }}">

        <label>Email:</label>
        <input type="text" name="email" value="{{ old('email', $cliente->email) }}">

        <label>Teléfono:</label>
        <input type="text" name="telefono" value="{{ old('telefono', $cliente->telefono) }}">

        <button type="submit">Guardar</button>
    </form>
@endsection
