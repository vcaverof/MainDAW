<?php
class Juego extends Soporte
{
    public string $consola;
    private int $minNumJugadores;
    private int $maxNumJugadores;

    public function __construct(string $titulo, int $numero, float $precio, string $consola, int $minNumJugadores, int $maxNumJugadores)
    {
        parent::__construct($titulo, $numero, $precio);
        $this->consola = $consola;
        $this->minNumJugadores = $minNumJugadores;
        $this->maxNumJugadores = $maxNumJugadores;
    }

    public function getMinNumJugadores()
    {
        return $this->minNumJugadores;
    }

    public function getMaxNumJugadores()
    {
        return $this->maxNumJugadores;
    }

    public function muestraJugadoresPosibles()
    {
        $jugadores = $this->maxNumJugadores - $this->minNumJugadores;
        return "Jugadores posibles: $jugadores ";
    }

    public function muestraResumen()
    {
        return parent::muestraResumen() . " - Consola: {$this->consola} - Mínimo de jugadores: {$this->minNumJugadores} - Máximo de jugadores: {$this->maxNumJugadores}";
    }
}
