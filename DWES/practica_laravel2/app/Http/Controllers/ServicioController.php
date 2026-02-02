<?php

namespace App\Http\Controllers;

use App\Models\Servicio;
use Illuminate\Http\Request;

class ServicioController extends Controller
{
    public function index()
    {
        $servicios = Servicio::orderBy('nombre')->paginate(5);

        return view('servicios.index', compact('servicios'));
    }

    public function create()
    {
        return view('servicios.form', [
            'servicio' => new Servicio()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'duracion_minutos' => 'required|integer|min:1',
            'precio' => 'required|numeric|min:0'
        ]);

        Servicio::create($request->all());

        return redirect()->route('servicios.index')->with('success', 'Servicio creado correctamente');
    }

    public function edit(Servicio $servicio)
    {
        return view('servicios.form', compact('servicio'));
    }

    public function update(Request $request, Servicio $servicio)
    {
        $request->validate([
            'nombre' => 'required',
            'duracion_minutos' => 'required|integer|min:1',
            'precio' => 'required|numeric|min:0',
        ]);

        $servicio->update($request->all());

        return redirect()->route('servicios.index')->with('success', 'Servicio actualizado correctamente');
    }

    public function toggle(Servicio $servicio) {
        $servicio->activo = !$servicio->activo;
        $servicio->save();

        return redirect()->route('servicios.index')->with('success', 'Estado del servicio actualizado');
    }
}
