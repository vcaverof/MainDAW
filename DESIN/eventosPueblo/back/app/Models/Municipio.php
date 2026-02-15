<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Municipio extends Model
{
    protected $table = 'municipios';
    public $timestamps = false;


    protected $fillable = [
        'nombre',
    ];

    public function eventos()
    {
        return $this->hasMany(Evento::class, 'municipio_id');
    }
}
