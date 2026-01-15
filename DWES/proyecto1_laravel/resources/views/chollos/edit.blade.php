@extends('layouts.app')

@section('content')

    <h1>Editar chollo</h1>

    @if ($errors->any())
        <div>
            <strong>Hay errores en el formulario:</strong>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('chollos.update', $chollo->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <label>Título:</label><br>
        <input type="text" name="titulo" value="{{ old('titulo', $chollo->titulo) }}"><br><br>

        <label>Descripción:</label><br>
        <textarea name="descripcion">{{ old('descripcion', $chollo->descripcion) }}</textarea><br><br>

        <label>URL:</label><br>
        <input type="text" name="url" value="{{ old('url', $chollo->url) }}"><br><br>

        <label>Categoría:</label><br>
        <select name="categoria_id">
            @foreach ($categorias as $categoria)
                <option value="{{ $categoria->id }}" {{ $categoria->id == $chollo->categoria_id ? 'selected' : '' }}>
                    {{ $categoria->nombre }}
                </option>
            @endforeach
        </select><br><br>

        <label>Puntuación:</label><br>
        <input type="number" name="puntuacion" value="{{ old('puntuacion', $chollo->puntuacion) }}"><br><br>

        <label>Precio original:</label><br>
        <input type="number" step="0.01" name="precio" value="{{ old('precio', $chollo->precio) }}"><br><br>

        <label>Precio con descuento:</label><br>
        <input type="number" step="0.01" name="precio_descuento"
            value="{{ old('precio_descuento', $chollo->precio_descuento) }}"><br><br>

        <label>Disponible:</label>
        <input type="checkbox" name="disponible" value="1" {{ $chollo->disponible ? 'checked' : '' }}>
        <br><br>

        <label>Nueva imagen (opcional):</label><br>
        <input type="file" name="imagen"><br><br>

        @if ($chollo->imagen)
            <p>Imagen actual:</p>
            <img src="{{ asset('storage/' . $chollo->imagen) }}" width="120">
        @endif


        <button type="submit">Actualizar chollo</button>
    </form>

    <br>
    <a href="/chollos">Volver al listado</a>
@endsection
