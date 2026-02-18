<form method="POST" action="{{ route('estudiantes.update', $estudiante) }}">
    @csrf
    @method('PUT')

    <label>Nombre: </label>
    <input type="text" name="nombre" value="{{ $estudiante->nombre }}">

    <label>Email: </label>
    <input type="email" name="email" value="{{ $estudiante->email }}">

    <label>Teléfono: </label>
    <input type="tel" name="telefono" value="{{ $estudiante->telefono }}">

    <label>Curso:</label>
    <select name="curso_id">
        @foreach($cursos as $curso)
        <option value="{{ $curso->id }}"
            {{ $estudiante->curso_id == $curso->id ? 'selected' : '' }}>
            {{ $curso->titulo }}
        </option>
        @endforeach
    </select>

    <button type="submit">Actualizar</button>
</form>