@extends('layouts.app')

@section('content')

    <h1>{{ $chollo->titulo }}</h1>

    @if ($chollo->imagen)
        <img src="{{ asset('storage/' . $chollo->imagen) }}" width="300">
    @endif

    <p><strong>Descripción:</strong> {{ $chollo->descripcion }}</p>

    <p><strong>URL:</strong>
        <a href="{{ $chollo->url }}" target="_blank">{{ $chollo->url }}</a>
    </p>

    <p><strong>Categoría:</strong>
        {{ $chollo->categoria?->name ?? 'Sin categoría' }}
    </p>

    <p><strong>Puntuación:</strong> {{ $chollo->puntuacion }}</p>

    <p><strong>Precio original:</strong> {{ $chollo->precio }} €</p>

    <p><strong>Precio con descuento:</strong> {{ $chollo->precio_descuento }} €</p>

    <br>

    <a href="/chollos">Volver al listado</a>
@endsection