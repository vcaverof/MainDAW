<?php

namespace App\Http\Controllers;

use App\Models\Chollo;
use App\Models\Categoria;

use Illuminate\Http\Request;

class CholloController extends Controller
{
    public function index()
    {
        $chollos = Chollo::with('categoria')->get(); //Obtener todos los chollos con su categoria

        return view('chollos.index', compact('chollos'));
    }

    public function create()
    {
        $categorias = Categoria::all();

        return view('chollos.create', compact('categorias'));
    }

    public function store(Request $request)
    {
        // Validación básica
        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'url' => 'required|url',
            'categoria_id' => 'required|exists:categorias,id',
            'puntuacion' => 'required|integer|min:0|max:10',
            'precio' => 'required|numeric',
            'precio_descuento' => 'required|numeric',
        ]);

        // Guardar el chollo
        Chollo::create([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'url' => $request->url,
            'categoria_id' => $request->categoria_id,
            'puntuacion' => $request->puntuacion,
            'precio' => $request->precio,
            'precio_descuento' => $request->precio_descuento,
            'disponible' => $request->has('disponible'),
        ]);

        return redirect('/chollos');
    }
}
