@include('layouts.nav')

<h1>Crear oferta nueva</h1>

{{-- Mostrar errores si los hay --}}
    @if ($errors->any())
        <div style="color:red">
            <strong>Hay errores en el formulario:</strong>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


<form method="POST" action="{{ route('ofertas.store') }}" style="display: flex; flex-direction: column; gap: 15px; width: 200px; background-color: lightblue; padding: 30px; border-radius:10px;">
    @csrf
    <label>Titulo: </label>
    <input type=" text" name="titulo" value="{{ old('titulo') }}">

    <label>Descripción: </label>
    <input type="text" name="descripcion" value="{{ old('descripcion') }}">

    <label>Salario: </label>
    <input type="number" name="salario" value="{{ old('salario') }}">

    <label>Tipo de contrato:</label>
    <select name="tipo_contrato" value="{{ old('tipo_contrato') }}">
       <option value="" selected disabled>-- Elige un tipo de contrato --</option>
       <option value="indefinido">Indefinido</option>
       <option value="temporal">Temporal</option>
       <option value="freelance">Freelance</option>
       <option value="practicas">Prácticas</option>
    </select>

    <label>Fecha de cierre: </label>
    <input type="date" name="fecha_cierre" value="{{ old('fecha_cierre') }}">

    <label>Empresa: </label>
    <select name="empresa_id" value="{{ old('empresa_id') }}">
        @foreach ($empresas as $empresa)
            <option value="{{ $empresa->id }}">
               {{ $empresa->nombre }}
            </option>
        @endforeach
    </select>

    <button type="submit">Crear</button>
</form>
