@include('layouts.nav')

<h1>Listado de Estudiantes</h1>


@if(session('success'))
<p style="color: green;">{{ session('success') }}</p>
@endif

<a href="{{ route('estudiantes.create') }}">Crear Estudiante</a>

<table border="1" cellpadding="10" cellspacing="0">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Curso</th>
            <th>Acciones</th>
        </tr>
    </thead>

    <tbody>
        @foreach($estudiantes as $estudiante)
        <tr>
            <td>{{ $estudiante->nombre }}</td>
            <td>{{ $estudiante->email }}</td>
            <td>{{ $estudiante->telefono }}</td>
            <td>{{ $estudiante->curso->titulo }}</td>

            <td>
                <a href="{{ route('estudiantes.edit', $estudiante) }}">Editar</a>

                <form action="{{ route('estudiantes.destroy', $estudiante) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit" onclick="return confirm('¿Seguro que quieres eliminarlo?')">
                        Eliminar
                    </button>
                </form>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>