<h1>Listado de Inscripciones</h1>

<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>ID</th>
            <th>Curso</th>
            <th>Estudiante</th>
            <th>Fecha de inscripción</th>
        </tr>
    </thead>

    <tbody>
        @foreach ($inscripciones as $inscripcion)
            <tr>
                <td>{{ $inscripcion->id }}</td>
                <td>{{ $inscripcion->curso->nombre }}</td>
                <td>{{ $inscripcion->estudiante->nombre }}</td>
                <td>{{ $inscripcion->fecha_inscripcion }}</td>
            </tr>
        @endforeach
    </tbody>
</table>
