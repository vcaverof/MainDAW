<?php
function generarTablero()
{
    $tablero = array_fill(0, 10, array_fill(0, 10, 0));
    $barcosColocados = 0;
    $cantidadBarcos = 4;

    while ($barcosColocados < $cantidadBarcos) {
        $orientacion = rand(0, 1); //O horizontal 1 vertical
        $x = rand(0, 9);
        $y = rand(0, 9);
        $valido = true;
        $coordenadas = [];

        for ($i = 0; $i < $cantidadBarcos; $i++) {
            //Avanza en funcion de la orientación del barco
            $nx = $x + ($orientacion ? 0 : $i);
            $ny = $y + ($orientacion ? $i : 0);
            if ($nx > 9 || $ny > 9 || $tablero[$nx][$ny] === 1) { //Comprueba que no se salga o que haya otro barco
                $valido = false;
                break;
            }
            $coordenadas[] = [$nx, $ny];
        }

        if ($valido) {
            foreach ($coordenadas as [$nx, $ny]) {
                $tablero[$nx][$ny] = 1;
            }
            $barcosColocados++;
        }
        return $tablero;
    }
}

function cargarDesdeFichero($ruta = 'tablero.txt')
{
    $tablero = array_fill(0, 10, array_fill(0, 10, 0));

    if (!file_exists($ruta)) {
        // Si no existe el archivo, se devuelve un tablero vacío
        return $tablero;
    }

    $lineas = file($ruta, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($lineas as $linea) {
        $coordenadas = explode(',', trim($linea));
        if (count($coordenadas) === 2) {
            $x = intval($coordenadas[0]);
            $y = intval($coordenadas[1]);

            if ($x >= 0 && $x < 10 && $y >= 0 && $y < 10) {
                $tablero[$x][$y] = 1;
            }
        }
    }
    return $tablero;
}
