<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Oferta;
use App\Models\Empresa;

class OfertaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Actualizar el estado de las ofertas
        Oferta::where('estado', 'activa')
            ->where(function ($query) {
                $query->where('fecha_cierre', '<', date('Y-m-d'));
            })->update(['estado' => 'expirada']);

        $ofertas = Oferta::with('empresa')->orderBy('fecha_cierre', 'desc')
            ->paginate(10);

        return view('ofertas.index', compact('ofertas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $empresas = Empresa::all();
        return view('ofertas.create', compact('empresas'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'required',
            'salario' => 'required|numeric|min:0',
            'tipo_contrato' => 'required',
            'fecha_cierre' => 'required|date|after_or_equal:today',
            'empresa_id' => 'required | exists:empresas,id',
        ]);

        Oferta::create($request->all());

        return redirect()->route('ofertas.index')->with('success', 'Oferta creada con éxito');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Oferta $oferta)
    {
        $ofertas = $oferta->ofertas()
            ->orderBy('fecha', 'desc')
            ->orderBy('hora', 'desc')
            ->get();

        return redirect()->route('ofertas.show', compact('ofertas'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Oferta $oferta)
    {
        return redirect()->route('ofertas.index', compact('oferta'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Oferta $oferta)
    {
        return redirect()->route('ofertas.index', compact('oferta'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Oferta $oferta)
    {
        return redirect()->route('ofertas.index', compact('oferta'));
    }

    public function estado() {
        $ofertas = Oferta::with('estado')->where('estado', '=', 'activa')->get();
    }
}
