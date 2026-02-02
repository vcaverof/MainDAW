@extends('layouts.app')

@section('content')
    <h1>Bienvenido al sistema de gestión</h1>

    <a href="{{ route('clientes.index') }}" class="btn btn-primary">
        Ir a clientes
    </a>
@endsection
