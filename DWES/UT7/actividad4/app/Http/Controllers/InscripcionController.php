<?php

namespace App\Http\Controllers;
use App\Models\Inscripcion;

use Illuminate\Http\Request;

class InscripcionController extends Controller
{
    public function index()
    {
        // Recuperamos las inscripciones con sus relaciones
        $inscripciones = Inscripcion::with(['curso', 'estudiante'])->get();

        return view('inscripciones', compact('inscripciones'));
    }
}
