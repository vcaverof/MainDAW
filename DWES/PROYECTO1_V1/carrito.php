<?php
include 'nav.php';
include 'conexion.php';

//Eliminar elementos del carrito
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['eliminar'])) {
    $indice = $_POST['eliminar'];

    if (isset($_SESSION['carrito'][$indice])) {
        unset($_SESSION['carrito'][$indice]);
    }

    header("Location: carrito.php");
    exit();
}

//Actualizar cantidades de los elementos del carrito
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['actualizar']) && isset($_POST['cantidades'])) {
    foreach ($_POST['cantidades'] as $index => $cantidad) {
        $_SESSION['carrito'][$index]['cantidad'] = max(1, intval($cantidad));
    }

    header("Location: carrito.php");
    exit();
}


echo "<h2>🛒 Tu carrito</h2>";

if (!isset($_SESSION['carrito']) || count($_SESSION['carrito']) === 0) {
    echo "El carrito está vacío";
} else {

    //Formulario para actualizar/eliminar del carrito
    echo '<form method="post">';
    echo "<table border = '1' cellpadding = '8' cellspacing = '0'>";
    echo "<tr><th>Producto</th><th>Unidades</th>Acción</tr>";

    //Mostramos cada item del carrito, recorriendo los que haya 
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

    //Formulario aparte para confirmar el pedido
    echo "<form method='post' action='confirmar_pedido.php'>";
    echo "<button type='submit' name='confirmar_pedido'>Confirmar pedido</button>";
    echo "<form>";
}
