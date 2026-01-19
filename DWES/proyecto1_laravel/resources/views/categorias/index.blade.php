@extends('layouts.app')

@section('content')
    <h1>Categorías</h1>

    <a href="{{ route('categorias.create') }}" class="btn btn-crear">Agregar categoría</a>

    <br><br>

    @foreach ($categorias as $categoria)
        <div class="chollo-card">
            <div>
                <h3>{{ $categoria->nombre }}</h3>
                <p>{{ $categoria->chollos_count }} chollos asociados</p>

                <form action="{{ route('categorias.destroy', $categoria->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-borrar"
                        onclick="return confirm('¿Seguro que quieres borrar la categoría: {{ addslashes($categoria->nombre) }}?')">
                        Eliminar
                    </button>
                </form>
            </div>
        </div>
    @endforeach
@endsection
