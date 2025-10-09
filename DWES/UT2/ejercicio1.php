<?php

//Generar número aleatorio entre 1 y 100

$num = rand(1,100);

echo "El número aleatorio es: $num <br>";

//Verificamos si es par o impar

if ($num % 2 == 0) {
    echo "El número es par";
} else {
    echo "El número <strong>NO</strong> es par";
}

?>