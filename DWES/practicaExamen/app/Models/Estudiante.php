<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'email', 'telefono', 'curso_id'];

    public function curso()
    {
        return $this->belongsTo(\App\Models\Curso::class);
    }
}
