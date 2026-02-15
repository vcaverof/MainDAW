<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RolMiddleware
{
    public function handle(Request $request, Closure $next, $rol)
    {
        // Usuario autenticado
        $user = $request->user();

        // Si no está autenticado
        if (!$user) {
            return response()->json(['error' => 'No autenticado'], 401);
        }

        // Si el rol no coincide
        if ($user->rol_id != $rol) {
            return response()->json(['error' => 'No tienes permisos'], 403);
        }

        return $next($request);
    }
}
