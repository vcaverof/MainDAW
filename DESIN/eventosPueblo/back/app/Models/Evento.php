<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'eventos';
    public $timestamps = false;


    protected $fillable = [
        'nombre',
        'fecha',
        'descripcion',
        'imagen',
        'municipio_id'
    ];

    public function municipio()
    {
        return $this->belongsTo(Municipio::class, 'municipio_id');
    }

    public function usuarios()
    {
        return $this->belongsToMany(User::class, 'eventos_usuarios', 'evento_id', 'usuario_id');
    }
}
