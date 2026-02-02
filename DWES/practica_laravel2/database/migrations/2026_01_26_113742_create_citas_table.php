<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('citas', function (Blueprint $table) {
            $table->id();

            $table->foreignId('usuario_id')->constrained('users');
            $table->foreignId('cliente_id')->constrained('clientes');
            $table->foreignId('servicios_id')->constrained('servicios');

            $table->date('fecha');
            $table->time('hora');

            $table->enum('estado', ['activa', 'cancelada'])->default('activa');
            $table->text('notas')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('citas');
    }
};
