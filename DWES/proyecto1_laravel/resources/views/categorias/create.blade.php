@extends('layouts.app')

@section('content')
    <h1>Agregar categoría</h1>

    <form action="{{ route('categorias.store') }}" method="POST">
        @csrf

        <label>Nombre de la categoría:</label>
        <input type="text" name="nombre">

        <button type="submit" class="btn btn-crear">Crear categoría</button>
    </form>

    <br>
    <a href="{{ route('categorias.index') }}" class="btn btn-ver">Volver</a>
@endsection
