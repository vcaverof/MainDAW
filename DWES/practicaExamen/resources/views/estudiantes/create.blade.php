<form method="POST" action="{{ route('estudiantes.store') }}">
    @csrf
    <label>Nombre: </label>
    <input type=" text" name="nombre">

    <label>Email: </label>
    <input type="email" name="email">

    <label>Teléfono: </label>
    <input type="tel" name="telefono">

    <label>Curso: </label>
    <select name="curso_id">
        @foreach($cursos as $curso)
        <option value="{{ $curso->id }}"
            {{ $curso->titulo }}>
        </option>
        @endforeach
    </select>

    <button type="submit">Guardar</button>

</form>