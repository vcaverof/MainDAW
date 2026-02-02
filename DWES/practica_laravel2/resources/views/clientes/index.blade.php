@extends('layouts.app')

@section('content')
    <h1>Clientes</h1>

    {{-- Mensaje de éxito --}}
    @if (session('success'))
        <p style="color: green;">{{ session('success') }}</p>
    @endif

    <a href="{{ route('clientes.create') }}">Crear cliente</a>

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
                    {{-- Ver ficha --}}
                    <a href="{{ route('clientes.show', $cliente) }}">
                        Ver
                    </a>

                    {{-- Editar --}}
                    <a href="{{ route('clientes.edit', $cliente) }}" style="margin-left: 10px;">
                        Editar
                    </a>

                    {{-- Archivar / Reactivar --}}
                    <form action="{{ route('clientes.toggle', $cliente) }}" method="POST"
                        style="display:inline; margin-left: 10px;">
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
