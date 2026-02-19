@extends('layouts.app')

@section('content')
    <h1>Listado de chollos</h1>

    <a href="{{ route('chollos.create') }}" class="btn btn-crear">Crear nuevo chollo</a>

    <ul>
        @foreach ($chollos as $chollo)
            <div class="chollo-card">

                <div>

                    @if ($chollo->imagen)
                        <img src="{{ asset('storage/' . $chollo->imagen) }}" width="50">
                    @endif
                    <h3>{{ $chollo->titulo }}</h3>
                    <p>{{ $chollo->precio_descuento }} € — {{ $chollo->categoria?->nombre }}</p>

                    <a href="{{ route('chollos.show', $chollo->id) }}" class="btn btn-ver">Ver</a>
                    <a href="{{ route('chollos.edit', $chollo->id) }}" class="btn btn-editar">Editar</a>

                    <form action="{{ route('chollos.destroy', $chollo->id) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-borrar"
                            onclick="return confirm('¿Seguro que quieres borrar el chollo: {{ addslashes($chollo->titulo) }}?')">
                            Borrar
                        </button>
                    </form>
                </div>
            </div>
        @endforeach
        <div style="margin-top: 20px;">
            {{ $chollos->links('pagination') }}
        </div>
    </ul>
@endsection
