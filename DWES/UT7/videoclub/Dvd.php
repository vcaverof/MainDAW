<?php
class Dvd extends Soporte {
    public string $idiomas;
    private string $formatPantalla;

    public function __construct(string $titulo, float $precio, string $idiomas, string $formatPantalla)
    {
        parent::__construct($titulo, $numero, $precio);
        $this->idiomas = $idiomas;
        $this->formatPantalla = $formatPantalla;
    }

    public function muestraResumen()
    {
        parent::muestraResumen();
        echo ` - Idioma: {$this->idiomas} - Formato de pantalla: {$this->formatPantalla}`;
    }
}