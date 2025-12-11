<h1>Panel General</h1>

<hr>

<h2>Cursos</h2>
<table border="1" cellpadding="8">
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Precio</th>
    </tr>
    @foreach ($cursos as $curso)
        <tr>
            <td>{{ $curso->id }}</td>
            <td>{{ $curso->nombre }}</td>
            <td>{{ $curso->precio }}</td>
        </tr>
    @endforeach
</table>

<hr>

<h2>Estudiantes</h2>
<table border="1" cellpadding="8">
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
    </tr>
    @foreach ($estudiantes as $estudiante)
        <tr>
            <td>{{ $estudiante->id }}</td>
            <td>{{ $estudiante->nombre }}</td>
            <td>{{ $estudiante->email }}</td>
        </tr>
    @endforeach
</table>

<hr>

<h2>Inscripciones</h2>
<table border="1" cellpadding="8">
    <tr>
        <th>ID</th>
        <th>Curso</th>
        <th>Estudiante</th>
        <th>Fecha</th>
    </tr>
    @foreach ($inscripciones as $inscripcion)
        <tr>
            <td>{{ $inscripcion->id }}</td>
            <td>{{ $inscripcion->curso->nombre }}</td>
            <td>{{ $inscripcion->estudiante->nombre }}</td>
            <td>{{ $inscripcion->fecha_inscripcion }}</td>
        </tr>
    @endforeach
</table>
