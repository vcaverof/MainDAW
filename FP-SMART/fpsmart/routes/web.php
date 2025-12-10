<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsuarioController;

Route::middleware('api')->prefix('api')->group(function () {
    Route::apiResource('usuarios', UsuarioController::class);
});
