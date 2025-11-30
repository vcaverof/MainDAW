<?php

namespace Dwes\ProyectoVideoclub;

// Incluimos recursos necesarios
include_once "Soporte.php";
include_once "Util/VideoclubException.php";
include_once "Util/SoporteYaAlquiladoException.php";
include_once "Util/CupoSuperadoException.php";
include_once "Util/SoporteNoEncontradoException.php";
include_once "Util/ClienteNoEncontradoException.php";

// Usamos los namespaces para escribir menos código abajo
use Dwes\ProyectoVideoclub\Util\SoporteYaAlquiladoException;
use Dwes\ProyectoVideoclub\Util\CupoSuperadoException;
use Dwes\ProyectoVideoclub\Util\SoporteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\ClienteNoEncontradoException;

class Cliente
{
    public string $nombre;
    private int $numero;
    private array $soportesAlquilados;
    private int $numSoportesAlquilados;
    private int $maxAlquilerConcurrente;

    public function __construct(string $nombre, int $numero, int $maxAlquilerConcurrente = 3)
    {
        $this->nombre = $nombre;
        $this->numero = $numero;
        $this->maxAlquilerConcurrente = $maxAlquilerConcurrente;
        $this->soportesAlquilados = [];
        $this->numSoportesAlquilados = 0;
    }

    public function getNumero(): int
    {
        return $this->numero;
    }

    public function getNumSoportesAlquilados(): int
    {
        return $this->numSoportesAlquilados;
    }

    
    public function alquilar(Soporte $soporte): self
    {
        // 1. Comprobamos si el cliente YA tiene este soporte concreto
        if ($this->tieneAlquilado($soporte)) {
            throw new SoporteYaAlquiladoException("El cliente ya tiene alquilado el soporte " . $soporte->getNumero());
        }

        // 2. Comprobamos si supera el cupo
        if ($this->numSoportesAlquilados >= $this->maxAlquilerConcurrente) {
            throw new CupoSuperadoException("Cupo de alquileres superado.");
        }

        // 3. Comprobamos si el soporte está alquilado por OTRO cliente
        // (Asumiendo que has añadido public $alquilado en Soporte.php como pide el PDF)
        if ($soporte->alquilado) {
            throw new SoporteYaAlquiladoException("El soporte ya está alquilado por otro socio.");
        }

        // --- Si pasa las validaciones, realizamos el alquiler ---

        // Añadimos al array usando el ID como clave
        $this->soportesAlquilados[$soporte->getNumero()] = $soporte;

        // Incrementamos contador
        $this->numSoportesAlquilados++;

        // Marcamos el soporte como alquilado (Requisito PDF)
        $soporte->alquilado = true;

        return $this; // Permite encadenamiento
    }

    public function devolver(int $numSoporte): self
    {
        // Verificamos si lo tiene alquilado
        if (!isset($this->soportesAlquilados[$numSoporte])) {
            throw new SoporteNoEncontradoException("El soporte con número $numSoporte no está alquilado por este cliente.");
        }

        // Recuperamos el objeto para cambiarle el estado
        $soporte = $this->soportesAlquilados[$numSoporte];

        // Marcamos el soporte como NO alquilado (Requisito PDF)
        $soporte->alquilado = false;

        // Eliminamos del array y restamos contador
        unset($this->soportesAlquilados[$numSoporte]);
        $this->numSoportesAlquilados--;

        return $this;
    }

    public function tieneAlquilado(Soporte $soporte): bool
    {
        return isset($this->soportesAlquilados[$soporte->getNumero()]);
    }

    public function listaAlquileres(): void
    {
        if ($this->numSoportesAlquilados === 0) {
            echo "El cliente {$this->nombre} no tiene soportes alquilados.\n";
            return;
        }

        echo "Soportes alquilados por {$this->nombre}:\n";
        foreach ($this->soportesAlquilados as $soporte) {
            echo $soporte->muestraResumen() . "\n";
        }
    }

    public function muestraResumen(): void
    {
        echo "Cliente: {$this->nombre} (ID: {$this->numero})\n";
        echo "Número de soportes alquilados: {$this->numSoportesAlquilados}\n";
        echo "Máximo permitido: {$this->maxAlquilerConcurrente}\n";
    }
}
