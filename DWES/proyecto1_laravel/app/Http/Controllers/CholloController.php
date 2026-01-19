<?php

namespace App\Http\Controllers;

use App\Models\Chollo;
use App\Models\Categoria;

use Illuminate\Http\Request;

class CholloController extends Controller
{
    public function index()
    {
        $chollos = Chollo::with('categoria')
        ->orderBy('created_at', 'desc')
        ->paginate(5); //Obtener todos los chollos con su categoria paginados

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
            'imagen' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        //Guardar la imagen (en caso de haberla) en el servidor
        $imagenPath = null;

        if ($request->hasFile('imagen')) { //En caso de haber imagen, la guarda en la carpeta public
            $imagenPath = $request->file('imagen')->store('chollos', 'public');
        }

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
            'imagen' => $imagenPath,
        ]);

        return redirect('/chollos');
    }

    //Metodo para mostrar un chollo y su categoria
    public function show($id)
    {
        //Cargar el chollo con su categoria
        $chollo = Chollo::with('categoria')->findOrFail($id);

        return view('chollos.show', compact('chollo'));
    }

    //Metodo para editar un chollo
    public function edit($id)
    {
        $chollo = Chollo::findOrFail($id);
        $categorias = Categoria::all();

        return view('chollos.edit', compact('chollo', 'categorias'));
    }

    //Metodo para actualizar un chollo
    public function update(Request $request, $id)
    {
        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'url' => 'required|url',
            'categoria_id' => 'required|exists:categorias,id',
            'puntuacion' => 'required|integer|min:0|max:10',
            'precio' => 'required|numeric',
            'precio_descuento' => 'required|numeric',
        ]);

        $chollo = Chollo::findOrFail($id);

        $imagenPath = $chollo->imagen;

        if ($request->hasFile('imagen')) {
            $imagenPath = $request->file('imagen')->store('chollos', 'public');
        }

        $chollo->update([
            'titulo' => $request->titulo,
            'descripcion' => $request->descripcion,
            'url' => $request->url,
            'categoria_id' => $request->categoria_id,
            'puntuacion' => $request->puntuacion,
            'precio' => $request->precio,
            'precio_descuento' => $request->precio_descuento,
            'disponible' => $request->has('disponible'),
            'imagen' => $imagenPath,
        ]);

        return redirect('/chollos');
    }

    public function destroy($id)
    {
        $chollo = Chollo::findOrFail($id);
        $chollo->delete();

        return redirect('/chollos');
    }

    public function show_cat()
    {
        //Cargar el chollo con su categoria
        $chollo = Chollo::with('categoria')->findOrFail($id);

        return view('chollos.show', compact('chollo'));
    }
}
