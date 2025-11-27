<?php
session_start();
include 'cabecera.php';

echo "<h2>🛒 Tu carrito</h2>";

//Comprobar si se ha incluido algun objeto en el carrito
if (!isset($_SESSION['carrito']) || count($_SESSION['carrito']) === 0) {
    echo "<p>El carrito está vacío.</p>";
} else {
    // Formulario para actualizar/eliminar
    echo '<form method="POST" action="carrito.php">';
    echo "<table border='1' cellpadding='8' cellspacing='0'>";
    echo "<tr><th>Producto</th><th>Unidades</th><th>Acción</th></tr>";

    foreach ($_SESSION['carrito'] as $index => $item) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($item['nombre']) . "</td>";
        echo "<td>
                <input type='number' name='cantidades[$index]' value='" . intval($item['cantidad']) . "' min='1'>
              </td>";
        echo "<td>
                <button type='submit' name='eliminar' value='$index'>Eliminar</button>
              </td>";
        echo "</tr>";
    }

    echo "</table><br>";
    echo "<button type='submit' name='actualizar'>Actualizar cantidades</button>";
    echo "</form>";

    // Formulario separado para confirmar pedido
    echo '<form method="POST" action="confirmar_pedido.php">';
    echo '<button type="submit" name="confirmar">Confirmar pedido</button>';
    echo '</form>';
}
?>
