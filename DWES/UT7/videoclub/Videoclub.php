<?php

namespace Dwes\ProyectoVideoclub;

/**
 * Clase principal del Videoclub
 * @version v0.331
 */

use Dwes\ProyectoVideoclub\Util\SoporteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\ClienteNoEncontradoException;
use Dwes\ProyectoVideoclub\Util\SoporteYaAlquiladoException;
use Dwes\ProyectoVideoclub\Util\CupoSuperadoException;
use Dwes\ProyectoVideoclub\Util\VideoclubException;

class Videoclub
{
    private string $nombre;
    private array $productos;
    private int $numProductos;
    private array $socios;
    private int $numSocios;
    private int $numProductosAlquilados;
    private int $numTotalAlquileres;

    public function __construct(string $nombre)
    {
        $this->nombre = $nombre;
        $this->productos = [];
        $this->socios = [];
        $this->numProductos = 0;
        $this->numSocios = 0;
        $this->numProductosAlquilados = 0;
        $this->numTotalAlquileres = 0;
    }

    public function getNumProductosAlquilados(): int
    {
        return $this->numProductosAlquilados;
    }

    public function getNumTotalAlquileres(): int
    {
        return $this->numTotalAlquileres;
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

    public function incluirCintaVideo(string $titulo, float $precio, int $duracion)
    {
        $id = count($this->productos) + 1;

        $cinta = new CintaVideo($titulo, $id, $precio, $duracion);
        $this->incluirProducto($cinta);
    }

    public function incluirDvd(string $titulo, float $precio, string $idiomas, string $pantalla)
    {
        $id = count($this->productos) + 1;

        $dvd = new Dvd($titulo, $id, $precio, $idiomas, $pantalla);
        $this->incluirProducto($dvd);
    }

    public function incluirJuego(string $titulo, float $precio, string $consola, int $minJ, int $maxJ)
    {
        $id = count($this->productos) + 1;

        $juego = new Juego($titulo, $id, $precio, $consola, $minJ, $maxJ);

        $this->incluirProducto($juego);
    }

    public function incluirSocio(string $nombre, int $maxAlquileresConcurrentes = 3)
    {
        $id = $this->numSocios + 1;
        $socio = new Cliente($nombre, $id, $maxAlquileresConcurrentes);
        $this->socios[$id] = $socio;
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
        try {
            // 1. Verificamos la existencia del socio
            if (!isset($this->socios[$numeroCliente])) {
                throw new ClienteNoEncontradoException("El socio con número $numeroCliente no existe.");
            }

            // 2. Verificamos la existencia del producto
            if (!isset($this->productos[$numeroSoporte])) {
                throw new SoporteNoEncontradoException("El producto con número $numeroSoporte no existe.");
            }

            $socio = $this->socios[$numeroCliente];
            $producto = $this->productos[$numeroSoporte];

            // 3. Delegamos el alquiler en el socio (puede lanzar SoporteYaAlquiladoException o CupoSuperadoException)
            $socio->alquilar($producto);

            // 4. Si el alquiler es exitoso, actualizamos contadores
            $this->numProductosAlquilados++;
            $this->numTotalAlquileres++;

            echo "Alquiler realizado con éxito: {$producto->titulo} a {$socio->nombre}.\n";
        } catch (VideoclubException $e) {
            // Capturamos cualquier excepción hija de VideoclubException
            echo "No se pudo realizar el alquiler: " . $e->getMessage() . "\n";
        }
    }

    public function alquilarSocioProductos(int $numSocio, array $numerosProductos): void
    {
        try {
            // 1. Verificamos el Socio
            if (!isset($this->socios[$numSocio])) {
                throw new ClienteNoEncontradoException("El socio con ID $numSocio no existe.");
            }
            $socio = $this->socios[$numSocio];

            // 2. VERIFICACIÓN ATÓMICA (Pre-chequeo)
            // Antes de alquilar nada, comprobamos que TODOS los productos estén disponibles.
            foreach ($numerosProductos as $numeroProducto) {
                // Existe el producto?
                if (!isset($this->productos[$numeroProducto])) {
                    throw new SoporteNoEncontradoException("El producto con ID $numeroProducto no existe.");
                }

                $producto = $this->productos[$numeroProducto];

                // Está ya alquilado?
                if ($producto->alquilado) {
                    throw new SoporteYaAlquiladoException("El producto '{$producto->titulo}' ya está alquilado.");
                }

            }

            // 3. EJECUCIÓN DEL ALQUILER
            // Si llegamos aquí, es seguro alquilar todo.
            foreach ($numerosProductos as $numeroProducto) {
                $producto = $this->productos[$numeroProducto];

                // Delegamos en el método alquilar del cliente (que actualiza $alquilado a true)
                $socio->alquilar($producto);

                // Actualizamos contadores del videoclub
                $this->numProductosAlquilados++;
                $this->numTotalAlquileres++;
            }

            echo "Alquiler de " . count($numerosProductos) . " productos realizado con éxito.\n";
        } catch (VideoclubException $e) {
            // Capturamos cualquier error (Socio no existe, Producto alquilado, etc.)
            echo "No se pudo realizar el alquiler: " . $e->getMessage() . "\n";
        }
    }

    public function devolverSocioProducto(int $numSocio, int $numeroProducto): void
    {
        // Podemos reutilizar la lógica del plural pasándole un array con un solo elemento
        $this->devolverSocioProductos($numSocio, [$numeroProducto]);
    }

    public function devolverSocioProductos(int $numSocio, array $numerosProductos): void
    {
        try {
            if (!isset($this->socios[$numSocio])) {
                throw new ClienteNoEncontradoException("El socio con ID $numSocio no existe.");
            }
            $socio = $this->socios[$numSocio];

            foreach ($numerosProductos as $numeroProducto) {
                if (!isset($this->productos[$numeroProducto])) {
                    throw new SoporteNoEncontradoException("El producto con ID $numeroProducto no existe.");
                }

                // Delegamos en el socio la devolución (pone $alquilado = false)
                $socio->devolver($numeroProducto);

                // Actualizamos contadores globales
                $this->numProductosAlquilados--;
            }

            echo "Devolución completada con éxito.\n";
        } catch (VideoclubException $e) {
            echo "Error en la devolución: " . $e->getMessage() . "\n";
        }
    }
}
