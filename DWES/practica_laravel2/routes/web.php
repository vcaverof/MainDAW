<?php

use App\Http\Controllers\CitaController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicioController;
use App\Models\Servicio;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
})->middleware('auth')->name('home');

/*
|--------------------------------------------------------------------------
| Breeze Default Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

/*
|--------------------------------------------------------------------------
| Home Route
|--------------------------------------------------------------------------
*/

Route::get('/home', function () {
    return view('home');
})->name('home');


/*
|--------------------------------------------------------------------------
| Clientes CRUD Routes
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    //Ruta principal de clientes
    Route::get('/clientes', [ClienteController::class, 'index'])->name('clientes.index');

    //Rutas para crear y almacenar los clientes
    Route::get('/clientes/create', [ClienteController::class, 'create'])->name('clientes.create');
    Route::post('/clientes/store', [ClienteController::class, 'store'])->name('clientes.store');

    //Rutas para editar y actualizar los clientes
    Route::get('/clientes/{cliente}/edit', [ClienteController::class, 'edit'])->name('clientes.edit');
    Route::put('/clientes/{cliente}', [ClienteController::class, 'update'])->name('clientes.update');

    //Ruta para archivar/reactivar los clientes (borrado lógico)
    Route::put('/clientes/{cliente}/toggle', [ClienteController::class, 'toggle'])->name('clientes.toggle');
});

/*
|--------------------------------------------------------------------------
| Servicios CRUD Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->group(function () {

    //Ruta para mostrar todos los servicios de la base de datos
    Route::get('/servicios', [ServicioController::class, 'index'])->name('servicios.index');

    //Rutas para crear y almacenar los servicios en la base de datos
    Route::get('/servicios/create', [ServicioController::class, 'create'])->name('servicios.create');
    Route::post('/servicios', [ServicioController::class, 'store'])->name('servicios.store');

    //Rutas para editar y actualizar los servicios en la base de datos
    Route::get('/servicios/{servicio}/edit', [ServicioController::class, 'edit'])->name('servicios.edit');
    Route::put('/servicios/{servicio}', [ServicioController::class, 'update'])->name('servicios.update');

    //Ruta para controlar el estado del servicio (borrado lógico)
    Route::put('/servicios/{servicio}/toggle', [ServicioController::class, 'toggle'])->name('servicios.toggle');
});

/*
|--------------------------------------------------------------------------
| Citas CRUD Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->group(function () {

    Route::get('/citas', [CitaController::class, 'index'])->name('citas.index');

    Route::get('/citas/create', [CitaController::class, 'create'])->name('citas.create');
    Route::post('/citas', [CitaController::class, 'store'])->name('citas.store');

    Route::get('/citas/{cita}/edit', [CitaController::class, 'edit'])->name('citas.edit');
    Route::put('/citas/{cita}', [CitaController::class, 'update'])->name('citas.update');

    Route::put('/citas/{cita}/cancel', [CitaController::class, 'cancel'])->name('citas.cancel');
    Route::put('/citas/{cita}/reactivate', [CitaController::class, 'reactivate'])->name('citas.reactivate');

    Route::put('/cita/{cita}/toggle', [CitaController::class, 'toggle'])->name('citas.toggle');
});


/*
|--------------------------------------------------------------------------
| Detalles del cliente Routes
|--------------------------------------------------------------------------
*/

Route::get('/clientes/{cliente}', [ClienteController::class, 'show'])->name('clientes.show');
