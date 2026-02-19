<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oferta extends Model
{
    use HasFactory;

    protected $fillable = ['titulo', 'descripcion', 'salario', 'tipo_contrato', 'fecha_cierre', 'estado', 'empresa_id'];

    public function empresa() {
        return $this->belongsTo(\App\Models\Empresa::class);
    }
}
