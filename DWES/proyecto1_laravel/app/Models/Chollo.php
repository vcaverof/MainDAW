<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chollo extends Model
{
    protected $fillable = [
        'titulo',
        'descripcion',
        'url',
        'categoria_id',
        'puntuacion',
        'precio',
        'precio_descuento',
        'disponible',
        'imagen'
    ];

    public function categoria() {
        return $this->belongsTo(Categoria::class);
    }
}
