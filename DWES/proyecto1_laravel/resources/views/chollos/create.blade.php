<h1>Crear un nuevo chollo</h1>

{{-- Mostrar errores si los hay --}}
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

<form action="{{ route('chollos.store') }}" method="POST">
    @csrf

    <label>Título:</label><br>
    <input type="text" name="titulo" value="{{ old('titulo') }}"><br><br>

    <label>Descripción:</label><br>
    <textarea name="descripcion">{{ old('descripcion') }}</textarea><br><br>

    <label>URL:</label><br>
    <input type="text" name="url" value="{{ old('url') }}"><br><br>

    <label>Categoría:</label><br>
    <select name="categoria_id">
        @foreach ($categorias as $categoria)
            <option value="{{ $categoria->id }}">{{ $categoria->nombre }}</option>
        @endforeach
    </select><br><br>

    <label>Puntuación:</label><br>
    <input type="number" name="puntuacion" value="{{ old('puntuacion') }}"><br><br>

    <label>Precio original:</label><br>
    <input type="number" step="0.01" name="precio" value="{{ old('precio') }}"><br><br>

    <label>Precio con descuento:</label><br>
    <input type="number" step="0.01" name="precio_descuento" value="{{ old('precio_descuento') }}"><br><br>

    <label>Disponible:</label>
    <input type="checkbox" name="disponible" value="1"><br><br>

    <button type="submit">Guardar chollo</button>
</form>
