<?php

$nota = rand(0,10);

echo "La nota generada es: $nota <br>";

if ($nota < 5) {
    echo "Suspenso";    
} elseif ($nota <= 6 && $nota >= 5){
    echo "Aprobado";
} elseif ($nota <= 8 && $nota > 6) {
    echo "Notable";
} else {
    echo "Sobresaliente";
}
    
?>