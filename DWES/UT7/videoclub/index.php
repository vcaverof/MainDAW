

<?php
/**
 * Archivo de pruebas para el Proyecto Videoclub 2.0
 * Se ubica en la raíz y no tiene namespace.
 */

// 1. INCLUDES
// Incluimos la clase principal y las clases de productos/clientes.
// Nota: Si tus clases ya tienen include_once dentro, quizás sobren algunos aquí,
// pero es mejor asegurar que todo esté cargado.
include_once "Videoclub.php";
include_once "CintaVideo.php";
include_once "Dvd.php";
include_once "Juego.php";
include_once "Cliente.php";
include_once "Soporte.php";

// 2. IMPORTS (Uso de namespaces)
use Dwes\ProyectoVideoclub\Videoclub;
use Dwes\ProyectoVideoclub\CintaVideo;
use Dwes\ProyectoVideoclub\Dvd;
use Dwes\ProyectoVideoclub\Juego;
use Dwes\ProyectoVideoclub\Cliente;

echo "<pre>"; // Para que se vea ordenado en el navegador
echo "<h1>Pruebas Videoclub 2.0</h1>";

// 3. INICIALIZACIÓN
$vc = new Videoclub("Videoclub Severo");

// Creamos algunos productos
echo "<h2>1. Creación de productos y socios</h2>";
$vc->incluirJuego("God of War", 19.99, "PS4", 1, 1);
$vc->incluirJuego("The Last of Us Part II", 49.99, "PS4", 1, 1);
$vc->incluirDvd("Torrente", 4.5, "es", "16:9");
$vc->incluirCintaVideo("Los Cazafantasmas", 3.5, 107);

// Creamos socios
$vc->incluirSocio("Amancio Ortega", 1); // ID 1
$vc->incluirSocio("Pablo Picasso", 2); // ID 2

echo "Productos y socios creados correctamente.<br><hr>";

// 4. PRUEBA DE ALQUILER MASIVO (EXITOSO)
echo "<h2>2. Prueba de Alquiler Masivo (Éxito)</h2>";
echo "El socio 1 intenta alquilar productos 1 y 2 (Juegos)...<br>";

// IDs de productos: 1 (God of War), 2 (TLOU), 3 (Torrente), 4 (Cazafantasmas)
$vc->alquilarSocioProductos(1, [1, 2]);

// Verificamos estado
// Nota: Accedemos a las propiedades via getters o asumiendo que el método listaProductos existe
echo "<strong>Resultado esperado:</strong> Alquiler realizado con éxito.<br>";


// 5. PRUEBA DE ATOMICIDAD (FALLO)
echo "<h2>3. Prueba de Atomicidad (Debe fallar todo)</h2>";
echo "El socio 2 intenta alquilar productos 1 (YA ALQUILADO) y 3 (LIBRE).<br>";
echo "Como uno está ocupado, NO debería alquilarse ninguno.<br>";

$vc->alquilarSocioProductos(2, [1, 3]);

echo "<strong>Resultado esperado:</strong> Error indicando que el producto 1 ya está alquilado.<br>";
// Comprobación visual: El producto 3 debería seguir libre.
// Si tuvieras un método para ver disponibilidad lo usaríamos, aquí confiamos en el mensaje de error.


// 6. PRUEBA DE DEVOLUCIÓN MASIVA
echo "<h2>4. Prueba de Devolución</h2>";
echo "El socio 1 devuelve sus productos...<br>";
$vc->devolverSocioProductos(1, [1, 2]);

echo "<strong>Resultado esperado:</strong> Devolución correcta. Ahora el producto 1 está libre.<br>";


// 7. REINTENTO TRAS DEVOLUCIÓN
echo "<h2>5. Reintento tras devolución</h2>";
echo "Ahora el socio 2 intenta alquilar de nuevo el 1 y el 3...<br>";
$vc->alquilarSocioProductos(2, [1, 3]);

echo "<strong>Resultado esperado:</strong> Alquiler realizado con éxito (porque el 1 ya se liberó).<br>";


// 8. PRUEBA DE EXCEPCIONES (NO EXISTE)
echo "<h2>6. Prueba de Producto no existente</h2>";
$vc->alquilarSocioProductos(1, [99]); // El 99 no existe

echo "<strong>Resultado esperado:</strong> Error indicando que el producto no existe.<br>";


// 9. ESTADÍSTICAS FINALES
echo "<h2>7. Estadísticas finales</h2>";
// Asegúrate de haber creado los getters en Videoclub.php como indicamos antes
echo "Total Productos Alquilados Actualmente: " . $vc->getNumProductosAlquilados() . "<br>";
echo "Total Histórico de Alquileres: " . $vc->getNumTotalAlquileres() . "<br>";

echo "</pre>";
