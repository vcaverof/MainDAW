<?php

$a = rand(1,100);
$b = rand(1,100);

echo "Los numeros son A = $a B = $b <br>";

if ($a != $b) {
    if ($a > $b) {
        echo "A es mayor que B";
    } else {
        echo "B es mayor que A";
    }
    
} else {
    echo "Los números son iguales";
}



?>