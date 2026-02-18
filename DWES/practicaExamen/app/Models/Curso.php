<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    protected $fillable = ['titulo', 'descripcion', 'fechaIni', 'fechaFin'];

    public function estudiantes()
    {
        return $this->hasMany(\App\Models\Estudiante::class);
    }
}
