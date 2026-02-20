<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tarea;
use Illuminate\Http\Request;

class TareaController extends Controller
{
    // GET /api/tareas
    public function index()
    {
        $tareas = Tarea::with('proyecto:id,nombre')->get();
        return response()->json($tareas);
    }

    // POST /api/tareas
    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required',
            'descripcion' => 'nullable',
            'estado' => 'required|in:pendiente,en_progreso,terminada',
            'id_proyecto' => 'required|exists:proyectos,id'
        ]);

        $tarea = Tarea::create($request->all());

        return response()->json([
            'mensaje' => 'Tarea creada correctamente',
            'tarea' => $tarea
        ], 201);
    }

    // PUT /api/tareas/{id}
    public function update(Request $request, $id)
    {
        $tarea = Tarea::find($id);

        if (!$tarea) {
            return response()->json(['mensaje' => 'Tarea no encontrada'], 404);
        }

        $request->validate([
            'titulo' => 'sometimes|required',
            'descripcion' => 'nullable',
            'estado' => 'sometimes|required|in:pendiente,en_progreso,terminada',
            'id_proyecto' => 'sometimes|required|exists:proyectos,id'
        ]);

        $tarea->update($request->all());

        return response()->json([
            'mensaje' => 'Tarea actualizada correctamente',
            'tarea' => $tarea
        ]);
    }

    // DELETE /api/tareas/{id}
    public function destroy($id)
    {
        $tarea = Tarea::find($id);

        if (!$tarea) {
            return response()->json(['mensaje' => 'Tarea no encontrada'], 404);
        }

        $tarea->delete();

        return response()->json(['mensaje' => 'Tarea eliminada correctamente']);
    }
}
