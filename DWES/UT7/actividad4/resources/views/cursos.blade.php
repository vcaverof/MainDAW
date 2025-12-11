<h1>Listado de Cursos</h1>

<table border="1" cellpadding="10">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
        </tr>
    </thead>

    <tbody>
        @foreach ($cursos as $curso)
            <tr>
                <td>{{ $curso->id }}</td>
                <td>{{ $curso->nombre }}</td>
                <td>{{ $curso->descripcion }}</td>
                <td>{{ $curso->precio }} €</td>
            </tr>
        @endforeach
    </tbody>
</table>


