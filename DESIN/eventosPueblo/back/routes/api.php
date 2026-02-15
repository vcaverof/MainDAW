<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EventoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MunicipioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'rol:1'])->get('/admin-test', function () {
    return "Solo admins";
});


// Rutas públicas
Route::get('/eventos', [EventoController::class, 'index']);
Route::get('/eventos/{id}', [EventoController::class, 'show']);

// Rutas solo para admin (rol_id = 1)
Route::middleware(['auth:sanctum', 'rol:1'])->group(function () {
    Route::post('/eventos', [EventoController::class, 'store']);
    Route::put('/eventos/{id}', [EventoController::class, 'update']);
    Route::delete('/eventos/{id}', [EventoController::class, 'destroy']);
});

//Filtro de eventos por municipio
Route::get('/eventos/municipio/{id}', [EventoController::class, 'porMunicipio']);



// Rutas públicas
Route::get('/municipios', [MunicipioController::class, 'index']);
Route::get('/municipios/{id}', [MunicipioController::class, 'show']);

// Rutas solo admin
Route::middleware(['auth:sanctum', 'rol:1'])->group(function () {
    Route::post('/municipios', [MunicipioController::class, 'store']);
    Route::put('/municipios/{id}', [MunicipioController::class, 'update']);
    Route::delete('/municipios/{id}', [MunicipioController::class, 'destroy']);
});

//Ruta perfil, para saber quien está logueado en todo momento
Route::middleware('auth:sanctum')->get('/perfil', function () {
    $user = auth()->user()->load('rol');

    return [
        'id' => $user->id,
        'username' => $user->username,
        'rol_id' => $user->rol_id,
        'rol' => $user->rol ? $user->rol->nombre : null,


        // Envía los permisos de cada usuario, para que el front limite las funcionalidades de forma más sencilla
        'permisos' => [
            'crear_eventos' => $user->rol_id == 1,
            'editar_eventos' => $user->rol_id == 1,
            'borrar_eventos' => $user->rol_id == 1,
            'crear_municipios' => $user->rol_id == 1,
            'editar_municipios' => $user->rol_id == 1,
            'borrar_municipios' => $user->rol_id == 1
        ]
    ];
});

//Ruta para cerrar sesión
Route::middleware('auth:sanctum')->post('/logout', function () {
    auth()->user()->tokens()->delete();
    return ['message' => 'Sesión cerrada'];
});

//Ruta para apuntarse a un evento
Route::middleware('auth:sanctum')->post('/eventos/{id}/apuntarse', [EventoController::class, 'apuntarse']);

//Ruta para desapuntarse
Route::middleware('auth:sanctum')->delete('/eventos/{id}/desapuntarse', [EventoController::class, 'desapuntarse']);

//Ruta para ver el listado de eventos a los que está apuntado el usuario
Route::middleware('auth:sanctum')->get('/mis-eventos', [EventoController::class, 'misEventos']);

//Ruta para ver el listado de eventos (no apuntado + eventos futuros)
Route::middleware('auth:sanctum')->get('/eventos-disponibles', [EventoController::class, 'eventosDisponibles']);
