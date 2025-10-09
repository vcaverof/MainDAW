<?php

function tablaMultiplicar($num)
{
    for ($i = 1; $i <= 10; $i++) {
        echo "<p>{$num} x {$i} = " . ($num * $i) . "</p>";
    }
}

tablaMultiplicar(5);

?>