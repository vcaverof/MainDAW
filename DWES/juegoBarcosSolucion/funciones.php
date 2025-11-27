<?php
function generarTablero()
{
    $tablero = array_fill(0, 10, array_fill(0, 10, 0));
    $barcosColocados = 0;
    $cantidadBarcos = 4;
    while ($barcosColocados < $cantidadBarcos) {
        $orientacion = rand(0, 1); // 0 horizontal, 1 vertical
        $x = rand(0, 9);
        $y = rand(0, 9);
        $valido = true;
        $coords = [];
        for ($i = 0; $i < $cantidadBarcos; $i++) {
            $nx = $x + ($orientacion ? 0 : $i);
            $ny = $y + ($orientacion ? $i : 0);
            if ($nx > 9 || $ny > 9 || $tablero[$nx][$ny] === 1) {
                $valido = false;
                break;
            }
            $coords[] = [$nx, $ny];
        }
        if ($valido) {
            foreach ($coords as [$nx, $ny]) {
                $tablero[$nx][$ny] = 1;
            }
            $barcosColocados++;
        }
    }
    return $tablero;
}
