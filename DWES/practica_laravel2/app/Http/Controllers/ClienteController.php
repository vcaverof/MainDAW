<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    //Listado de todos los clientes
    public function index()
    {
        $clientes = Cliente::orderBy('nombre')->paginate(5);

        return view('clientes.index', compact('clientes'));
    }

    //Mostrar los detalles del cliente
    public function show(Cliente $cliente)
    {
        // Citas ordenadas de más reciente a más antigua
        $citas = $cliente->citas()
            ->with(['servicio', 'usuario'])
            ->orderBy('fecha', 'desc')
            ->orderBy('hora', 'desc')
            ->get();

        // Mini-estadísticas
        $total = $citas->count();
        $activas = $citas->where('estado', 'activa')->count();
        $canceladas = $citas->where('estado', 'cancelada')->count();

        return view('clientes.show', compact('cliente', 'citas', 'total', 'activas', 'canceladas'));
    }


    //Crear cliente mediante formulario
    public function create()
    {
        return view('clientes.form', [
            'cliente' => new Cliente()
        ]);
    }

    //Almacenar los clientes en la base de datos
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'email' => 'required|email|unique:clientes,email',
            'telefono' => 'nullable|numeric'
        ]);

        Cliente::create($request->all());

        return redirect()->route('clientes.index')->with('success', 'Cliente creado correctamente');
    }

    //Editar cliente mediante formulario
    public function edit(Cliente $cliente)
    {
        return view('clientes.form', compact('cliente'));
    }

    //Actualizar los datos del cliente en la base de datos
    public function update(Request $request, Cliente $cliente)
    {
        $request->validate([
            'nombre' => 'required',
            'email' => 'required|email|unique:clientes,email,' . $cliente->id,
            'telefono' => 'nullable|numeric'
        ]);

        $cliente->update($request->all());

        return redirect()->route('clientes.index')->with('success', 'Cliente actualizado correctamente');
    }

    //Cambiar el estado del borrado lógico en la base de datos
    public function toggle(Cliente $cliente)
    {
        $cliente->activo = !$cliente->activo;
        $cliente->save();

        return redirect()->route('clientes.index')->with('success', 'Estado del cliente actualizado');
    }
}
