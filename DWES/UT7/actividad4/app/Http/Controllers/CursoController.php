<?php

namespace App\Http\Controllers;

use App\Models\Curso;

class CursoController extends Controller
{
    public function index()
    {
        $cursos = Curso::all(); // Recuperas los datos

        return view('cursos', compact('cursos')); // Los envías a la vista
    }
}
