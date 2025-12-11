<?php

namespace App\Http\Controllers;

use App\Models\Estudiante;

class EstudianteController extends Controller
{
    public function index()
    {
        $estudiantes = Estudiante::all(); // ← Aquí recuperas los datos

        return view('estudiantes', compact('estudiantes'));
    }
}
