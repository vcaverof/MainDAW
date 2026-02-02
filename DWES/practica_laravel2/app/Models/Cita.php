<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    protected $fillable = ['usuario_id', 'cliente_id', 'servicio_id', 'fecha', 'hora', 'estado', 'notas'];

    public function usuario() {
        return $this->belongsTo(User::class, 'usuario_id');
    }

    public function cliente() {
        return $this->belongsTo(Cliente::class);
    }

    public function servicio() {
        return $this->belongsTo(Servicio::class);
    }
}
