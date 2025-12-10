<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    // 📌 Listar todos los usuarios
    public function index()
    {
        return response()->json(Usuario::all(), 200);
    }

    // 📌 Mostrar un usuario por ID
    public function show($id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario, 200);
    }

    // 📌 Crear un nuevo usuario
    public function store(Request $request)
    {
        $usuario = Usuario::create($request->all());
        return response()->json($usuario, 201);
    }

    // 📌 Actualizar un usuario existente
    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->update($request->all());
        return response()->json($usuario, 200);
    }

    // 📌 Eliminar un usuario
    public function destroy($id)
    {
        $usuario = Usuario::find($id);

        if (!$usuario) {
            return response()->json(['error' => 'Usuario no encontrado'], 404);
        }

        $usuario->delete();

        return response()->json([
            'message' => 'Usuario eliminado correctamente',
            'id' => (int) $id
        ], 200);
    }
}
