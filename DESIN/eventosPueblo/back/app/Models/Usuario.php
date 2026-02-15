<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Rol;

class Usuario extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'usuarios';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = [
        'username',
        'password',
        'rol_id'
    ];

    protected $hidden = [
        'password'
    ];

    public function rol()
{
    return $this->belongsTo(Rol::class, 'rol_id');
}

    public function eventos()
    {
        return $this->belongsToMany(Evento::class, 'eventos_usuarios', 'usuario_id', 'evento_id');
    }
}
