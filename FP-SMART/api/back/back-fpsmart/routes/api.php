<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsuarioController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Endpoint de prueba
Route::get('/ping', function () { return response()->json(['message' => 'Hola, funciona']); });


//Endpoint de la tabla usuarios
Route::get('/usuarios', [UsuarioController::class, 'index']);
