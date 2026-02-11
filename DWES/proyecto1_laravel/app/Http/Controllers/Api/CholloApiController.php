<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Chollo;
use Illuminate\Http\Request;

class CholloApiController extends Controller
{
    public function index()
    {
        return Chollo::all();
    }

    public function store(Request $request) 
    {
        //Validacion
        $validated = $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'url' => 'required|url',
            'categoria_id' => 'required|exists:categorias,id',
            'puntuacion' => 'required|integer|min:0|max:10',
            'precio' => 'required|numeric',
            'precio_descuento' => 'required|numeric',
            'imagen' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        //Crear el registro
        $chollo = Chollo::create($validated);

        //Respuesta
        return response()->json([
            'message' => 'Producto creado correctamente',
            'data' => $chollo
        ], 201);
    }
}
