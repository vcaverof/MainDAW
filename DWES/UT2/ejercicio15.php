<?php
    $frutas = array("Manzana" => "roja", "Platano" => "amarillo", "Naranja" => "naranja");

    asort($frutas);
    foreach ($frutas as $key => $valor) {
        echo "Clave: " . $key . " - Valor: " . $valor;
        echo "<br>";
    }

    echo "<br>";

    arsort($frutas);
    foreach ($frutas as $key => $valor) {
        echo "Clave: " . $key . " - Valor: " . $valor;
        echo "<br>";
    }

    echo "<br>";

    ksort($frutas);
    foreach ($frutas as $key => $valor) {
        echo "Clave: " . $key . " - Valor: " . $valor;
        echo "<br>";
    }

    echo "<br>";

    krsort($frutas);
    foreach ($frutas as $key => $valor) {
        echo "Clave: " . $key . " - Valor: " . $valor;
        echo "<br>";
    }

?>