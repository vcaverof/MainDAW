<?php
class Videoclub {
    private string $nombre;
    private array $productos;
    private int $numProductos;
    private array $socios;
    private int $numSocios;

    public function __construct(string $nombre) 
    {
        $this->nombre = $nombre;
        $this->productos = [];
        $this->socios = [];
        $this->$numProductos = 0;
        $this->numSocios = 0;
    }

    private function incluirProducto(Soporte $producto) : bool {
        if ($this->productoExiste($producto)) {
            echo "Ya existe el producto {$this->nombre} registrado en el videoclub";
            return false;
        }

        $this->productos[$producto->getNumero()] = $producto;
        $this->numProductos++;
        echo "Producto añadido correctamente";
        return true;
    }

    //Comprueba si el cliente tiene algun soporte contratado
    public function productoExiste(Soporte $producto): bool
    {
        return isset($this->productos[$producto->getNumero()]);
    }

    public function incluirCintaVideo (string $titulo, float $precio, int $duracion) {
        $cinta = new CintaVideo($titulo, $precio, $duracion);
        $this->incluirProducto($cinta);
    }

    public function incluirDvd (string $titulo, float $precio, string $idiomas, string $pantalla) {
        $dvd = new Dvd($titulo, $precio, $idiomas, $pantalla);
        $this->incluirProducto($dvd);
    }

    public function incluirJuego (string $titulo, float $precio, string $consola, int $minJ, int $maxJ) {
        $juego = new Juego($titulo, $precio, $consola, $minJ, $maxJ);
        $this->incluirProducto($juego);
    }



}