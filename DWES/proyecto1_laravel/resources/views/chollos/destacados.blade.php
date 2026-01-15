@extends('layouts.app')

@section('content')
    <h1>Chollos destacados</h1>

    @foreach ($chollos as $chollo)
        <p>{{ $chollo->titulo }} — {{ $chollo->puntuacion }}/10</p>
    @endforeach
@endsection
