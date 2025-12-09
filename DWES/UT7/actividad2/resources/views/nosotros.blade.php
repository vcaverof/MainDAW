@extends('layout')

@section('contenido')
    <h1>Sección: Nosotros</h1>
    <ul>
        @foreach($personas as $nombre => $descripcion)
            <li>
                <a href="?persona={{ $nombre }}">{{ $nombre }}</a>
            </li>
        @endforeach
    </ul>

    @if(request()->has('persona'))
        <p>{{ $personas[request()->persona] }}</p>
    @endif
@endsection

