<?php
class Videoclub
{
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
        $this->numProductos = 0;
        $this->numSocios = 0;
    }

    private function incluirProducto(Soporte $producto): bool
    {
        if ($this->productoExiste($producto)) {
            echo "Ya existe el producto {$producto->muestraResumen()} registrado en el videoclub";
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

    public function incluirCintaVideo(string $titulo, int $numero, float $precio, int $duracion)
    {
        $cinta = new CintaVideo($titulo, $numero, $precio, $duracion);
        $this->incluirProducto($cinta);
    }

    public function incluirDvd(string $titulo, int $numero, float $precio, string $idiomas, string $pantalla)
    {
        $dvd = new Dvd($titulo, $numero, $precio, $idiomas, $pantalla);
        $this->incluirProducto($dvd);
    }

    public function incluirJuego(string $titulo, int $numero, float $precio, string $consola, int $minJ, int $maxJ)
    {
        $juego = new Juego($titulo, $numero, $precio, $consola, $minJ, $maxJ);
        $this->incluirProducto($juego);
    }

    public function incluirSocio(string $nombre, int $maxAlquileresConcurrentes = 3)
    {
        $numero = $this->numSocios + 1;
        $socio = new Cliente($nombre, $numero, $maxAlquileresConcurrentes);
        $this->socios[$numero] = $socio;
        $this->numSocios++;
        echo "Socio {$nombre} añadido correctamente";
    }

    public function listarProductos(): void
    {
        echo "Productos en el videoclub {$this->nombre}: \n";
        foreach ($this->productos as $producto) {
            echo $producto->muestraResumen() . "\n";
        }
    }

    public function listarSocios(): void
    {
        echo "Socios registrados en el videoclub {$this->nombre}: \n";
        foreach ($this->socios as $socio) {
            echo $socio->muestraResumen();
        }
    }

    public function alquilarSocioProducto(int $numeroCliente, int $numeroSoporte): void
    {
        if (!isset($this->socios[$numeroCliente])) {
            echo "No existe el socio con número {$numeroCliente}";
            return;
        }

        if (!isset($this->productos[$numeroSoporte])) {
            echo "No existe el producto con número {$numeroSoporte}";
        }

        $socio = $this->socios[$numeroCliente];
        $producto = $this->productos[$numeroSoporte];
        $socio->alquilar($producto);
    }
}
