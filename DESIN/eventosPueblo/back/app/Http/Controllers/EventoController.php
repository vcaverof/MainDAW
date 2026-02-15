<?php

namespace App\Http\Controllers;

use App\Models\Evento;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function index()
    {
        //Filtra los eventos que muestra, en función de si han caducado
        $hoy = now()->toDateString();
        return Evento::with('municipio')->where('fecha', '>=', $hoy)->get();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'fecha' => 'required|date',
            'municipio_id' => 'required|integer'
        ]);
        $evento = Evento::create($request->all());

        return response()->json($evento, 201);
    }

    public function show($id)
    {
        $evento = Evento::find($id);
        if (!$evento) {
            return response()->json(['error' => 'Evento no encontrado'], 404);
        }
        return $evento;
    }

    public function edit(Evento $evento)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $evento = Evento::find($id);
        if (!$evento) {
            return response()->json(['error' => 'Evento no encontrado'], 404);
        }
        $evento->update($request->all());
        return response()->json($evento);
    }

    public function destroy($id)
    {
        $evento = Evento::find($id);
        if (!$evento) {
            return response()->json(['error' => 'Evento no encontrado'], 404);
        }
        $evento->delete();
        return response()->json(['message' => 'Evento eliminado']);
    }

    public function porMunicipio($id)
    {
        // Solo eventos futuros
        $hoy = now()->toDateString();

        $eventos = Evento::with('municipio')
            ->where('municipio_id', $id)
            ->where('fecha', '>=', $hoy)
            ->get();

        return $eventos;
    }

    public function apuntarse($id)
    {
        $user = auth()->user();
        $evento = Evento::find($id);

        if (!$evento) {
            return response()->json(['error' => 'Evento no encontrado'], 404);
        }

        // Evitar apuntarse dos veces
        if ($user->eventos()->where('evento_id', $id)->exists()) {
            return response()->json(['error' => 'Ya estás apuntado a este evento'], 400);
        }

        $user->eventos()->attach($id);

        return response()->json(['message' => 'Te has apuntado al evento']);
    }

    public function desapuntarse($id)
    {
        $user = auth()->user();

        if (!$user->eventos()->where('evento_id', $id)->exists()) {
            return response()->json(['error' => 'No estás apuntado a este evento'], 400);
        }

        $user->eventos()->detach($id);

        return response()->json(['message' => 'Te has desapuntado del evento']);
    }

    public function misEventos()
    {
        $user = auth()->user();

        return $user->eventos()->with('municipio')->get();
    }

    public function eventosDisponibles()
    {
        $user = auth()->user();
        $hoy = now()->toDateString();

        return Evento::with('municipio')
            ->where('fecha', '>=', $hoy)
            ->whereNotIn('id', $user->eventos()->pluck('evento_id'))
            ->get();
    }
}
