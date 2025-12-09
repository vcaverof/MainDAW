<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaginaController extends Controller
{
    public function inicio() {
        return view('inicio');
    }

    public function nosotros() {
        // Lista de personas con descripción
        $personas = [
            'Ana' => 'Ana es fotógrafa especializada en retratos.',
            'Luis' => 'Luis se dedica a la fotografía de paisajes.',
            'Marta' => 'Marta trabaja en fotografía artística y experimental.'
        ];
        return view('nosotros', compact('personas'));
    }

    public function fotos($id = 1) {
        return view('fotos', ['id' => $id]);
    }
}
