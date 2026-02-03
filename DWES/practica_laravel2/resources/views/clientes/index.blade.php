@extends('layouts.app')

@section('content')
    <h1>Clientes</h1>

    {{-- Mensaje de éxito --}}
    @if (session('success'))
        <p style="color: green;">{{ session('success') }}</p><br>
    @endif

    <a href="{{ route('clientes.create') }}" class="btn btn-primary">
        Crear nuevo cliente
    </a>

    <table border="1" cellpadding="5" cellspacing="0" style="margin-top: 20px;">
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Activo</th>
            <th>Acciones</th>
        </tr>

        @foreach ($clientes as $cliente)
            <tr>
                <td>{{ $cliente->nombre }}</td>
                <td>{{ $cliente->email }}</td>
                <td>{{ $cliente->telefono }}</td>
                <td>{{ $cliente->activo ? 'Si' : 'No' }}</td>
                <td>
                    <form action="{{ route('clientes.show', $cliente) }}" method="GET" style="display:inline;">
                        @csrf
                        @method('GET')
                        <button type="submit" class="btn btn-secondary">Ver</button>
                    </form>

                    {{-- Editar --}}
                    <form action="{{ route('clientes.edit', $cliente) }}" method="GET" style="display:inline;">
                        @csrf
                        @method('GET')
                        <button type="submit" class="btn btn-secondary">Editar</button>
                    </form>

                    {{-- Archivar / Reactivar --}}
                    <form action="{{ route('clientes.toggle', $cliente) }}" method="POST"
                        style="display:inline;">
                        @csrf
                        @method('PUT')
                        <button type="submit">
                            {{ $cliente->activo ? 'Archivar' : 'Reactivar' }}
                        </button>
                    </form>
                </td>
            </tr>
        @endforeach
    </table>

    <div style="margin-top: 20px;">
        {{ $clientes->links() }}
    </div>
@endsection
