<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CholloController;
use App\Models\Chollo;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::get('/chollos', [CholloController::class, 'index']);

Route::get('/chollos/create', [CholloController::class, 'create'])->name('chollos.create');
Route::post('/chollos', [CholloController::class, 'store'])->name('chollos.store');

//Ruta para mostrar un chollo
Route::get('/chollos/{id}', [CholloController::class, "show"])->name('chollos.show');

//Rutas para editar y actualizar un chollo
Route::get('/chollos/{id}/edit', [CholloController::class, "edit"])->name('chollos.edit');
Route::put('/chollos/{id}', [CholloController::class, "update"])->name('chollos.update');

//Rutas para eliminar un chollo
Route::delete('/chollos/{id}', [CholloController::class, 'destroy'])->name('chollos.destroy');

//Ruta para los destacados
Route::get('/destacados', function () {
    $chollos = Chollo::with('categoria')->where('puntuacion', '>=', 9)->orderBy('puntuacion', 'desc')->get();
    return view('chollos.destacados', compact('chollos'));
});

//Ruta para el inicio
Route::get('/', function () {
    $chollos = Chollo::with('categoria')->orderBy('created_at', 'desc')->get();
    return view('chollos.index', compact('chollos'));
});

//Ruta para mostrar los nuevos
Route::get('/nuevos', function () {
    $haceCincoHoras = Carbon::now()->subMinutes(5);
    $chollos = Chollo::with('categoria')->where('created_at', '>=', $haceCincoHoras)->orderBy('created_at', 'desc')->get();
    return view('chollos.nuevos', compact('chollos'));
});
