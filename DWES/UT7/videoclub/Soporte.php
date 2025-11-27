<?php
class Soporte
{
    public string $titulo;
    protected int $numero;
    private float $precio;

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
        return ($this->precio + ($this->precio * 0.21));
    }

    public function getNumero() {
        return $this->numero;
    }

    public function muestraResumen() {
        return `Titulo: $this->titulo - Numero: $this->numero - Precio: $this->precio`;
    }
}


$web = new Soporte("Soporte Web", 1, 60.0);
echo $web->muestraResumen();



?>
