<?php
class Cliente
{
    public string $nombre;
    private int $numero;
    private array $soportesAlquilados;
    private int $numSoportesAlquilados;
    private int $maxAlquilerConcurrente;

    public function __construct(string $nombre, int $numero, int $maxAlquilerConcurrente)
    {
        $this->nombre = $nombre;
        $this->numero = $numero;
        $this->maxAlquilerConcurrente = $maxAlquilerConcurrente;
        $this->soportesAlquilados = [];
        $this->numSoportesAlquilados = 0;
    }

    public function alquilar(Soporte $soporte): bool
    {
        if ($this->numSoportesAlquilados >= $this->maxAlquilerConcurrente) {
            echo "El cliente {$this->nombre} ya alcanzó el máximo de alquileres";
            return false;
        }
        if ($this->tieneAlquilado($soporte)) {
            echo "El cliente {$this->nombre} ya tiene alquilado este soporte";
            return false;
        }

        $this->soportesAlquilados[$soporte->getNumero()] = $soporte;
        $this->numSoportesAlquilados++;
        echo "Soporte alquilado correctamente";
        return true;
    }

    //Comprueba si el cliente tiene algun soporte contratado
    public function tieneAlquilado(Soporte $soporte): bool
    {
        return isset($this->soportesAlquilados[$soporte->getNumero()]);
    }

    public function devolver(int $numSoporte): bool
    {
        if (isset($this->soportesAlquilados[$numSoporte])) {
            unset($this->soportesAlquilados[$numSoporte]);
            $this->numSoportesAlquilados--;
            echo "Soporte devuelto correctamente";
            return true;
        }

        echo "El cliente {$this->nombre} no tiene alquilado el soporte con número {$numSoporte}";
        return false;
    }

    public function listaAlquileres()
    {
        if ($this->numSoportesAlquilados === 0) {
            echo "El cliente {$this->nombre} no tiene soportes alquilados";
            return;
        }

        echo "Soportes alquilados por {$this->nombre}: \n";
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
