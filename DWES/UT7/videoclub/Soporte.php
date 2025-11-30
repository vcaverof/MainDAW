<?php
namespace Dwes\ProyectoVideoclub;

class Soporte
{
    public string $titulo;
    protected int $numero;
    private float $precio;
    public bool $alquilado = false;

    public function __construct(string $titulo, int $numero, float $precio)
    {
        $this->titulo = $titulo;
        $this->numero = $numero;
        $this->precio = $precio;
    }

    public function getPrecio() {
        return $this->precio;
    }

    public function getPrecioConIva() {
        return number_format($this->precio * 1.21, 2);
    }

    public function getNumero() {
        return $this->numero;
    }

    public function muestraResumen() {
        return "Titulo: $this->titulo - Numero: $this->numero - Precio: $this->precio";
    }
}
?>
