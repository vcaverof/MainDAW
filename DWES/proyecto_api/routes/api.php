<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TareaController;

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


Route::get('/tareas', [TareaController::class, 'index']); //Ruta para el GET
Route::post('/tareas', [TareaController::class, 'store']); //Ruta para el POST
Route::put('/tareas/{id}', [TareaController::class, 'update']); //Ruta para el PUT
Route::delete('/tareas/{id}', [TareaController::class, 'destroy']); //Ruta para el DELETE

