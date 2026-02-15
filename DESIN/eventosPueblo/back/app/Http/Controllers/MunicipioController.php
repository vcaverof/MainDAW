<?php

namespace App\Http\Controllers;

use App\Models\Municipio;
use Illuminate\Http\Request;

class MunicipioController extends Controller
{
    public function index()
    {
        return Municipio::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $request->validate(['nombre' => 'required']);
        $municipio = Municipio::create($request->all());
        return response()->json($municipio, 201);
    }

    public function show($id)
    {
        $municipio = Municipio::with('eventos')->find($id);
        if (!$municipio) {
            return response()->json(['error' => 'Municipio no encontrado'], 404);
        }
        return $municipio;
    }

    public function edit(Municipio $municipio)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $municipio = Municipio::find($id);
        if (!$municipio) {
            return response()->json(['error' => 'Municipio no encontrado'], 404);
        }
        $municipio->update($request->all());
        return response()->json($municipio);
    }

    public function destroy($id)
    {
        $municipio = Municipio::find($id);
        if (!$municipio) {
            return response()->json(['error' => 'Municipio no encontrado'], 404);
        }
        $municipio->delete();
        return response()->json(['message' => 'Municipio eliminado']);
    }
}
