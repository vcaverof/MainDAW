@extends('layouts.app')

@section('content')

    <h1>Chollos nuevos (últimos 5 minutos)</h1>

    @if ($chollos->isEmpty())
        <p>No hay chollos recientes.</p>
    @else
        <ul>
            @foreach ($chollos as $chollo)
                <li>
                    @if ($chollo->imagen)
                        <img src="{{ asset('storage/' . $chollo->imagen) }}" width="300">
                    @endif
                    
                    <strong>{{ $chollo->titulo }}</strong>
                    — {{ $chollo->precio_descuento }} €
                    — {{ $chollo->categoria?->name ?? 'Sin categoría' }}

                    <a href="{{ route('chollos.show', $chollo->id) }}">Ver</a>
                </li>
            @endforeach
        </ul>
    @endif

@endsection
