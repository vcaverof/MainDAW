<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    public $timestamps = false;   // 👈 Desactiva created_at y updated_at

    protected $table = 'usuarios';
    protected $hidden = ['contrasena']; //Oculta el campo contraseña para que no se muestre en la API

    protected $fillable = [
        'dni',
        'nombre',
        'apellidos',
        'email',
        'telefono',
        'contrasena',
        'activo',
        'direccion',
        'ciudad',
        'provincia',
        'codigo_postal',
        'ruta_cv',
        'fecha_nacimiento',
        'perfil'
    ];
}
