<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use App\Models\Estudiante;
use App\Models\Inscripcion;

class DashboardController extends Controller
{
    public function index()
    {
        $cursos = Curso::all();
        $estudiantes = Estudiante::all();
        $inscripciones = Inscripcion::with(['curso', 'estudiante'])->get();

        return view('dashboard', compact('cursos', 'estudiantes', 'inscripciones'));
    }
}
