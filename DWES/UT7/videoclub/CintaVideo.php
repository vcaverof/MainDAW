<?php 
class CintaVideo extends Soporte{
    private int $duracion;

    public function __construct(string $titulo, float $precio, int $duracion)
    {
        parent::__construct($titulo, $precio);
        $this->duracion = $duracion;
    }

    public function muestraResumen()
    {
        parent::muestraResumen();
        echo ` - Duración: {$this->duracion}`;
    }
}



?>