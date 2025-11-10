<?php
session_start();
require 'funciones.php';

//Verificar que la sesion se ha iniciado correctamente
if (!isset($_SESSION['tablero'], $_SESSION['intentos'], $_SESSION['disparos'], $_SESSION['aciertos'])) {
    header('Location: index.php');
    exit;
}

//Procesar disparo
$mensaje = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['x'], $_POST['y'])) {
    $x = intval($_POST['x']);
    $y = intval($_POST['y']);
    $clave = "$x,$y";

    if ($_SESSION['intentos'] <= 0) {
        $mensaje = "La partida ha terminado";
    } elseif ($_SESSION['aciertos'] >= 16) {
        $mensaje = "¡Has ganado!";
    } elseif (in_array($clave, $_SESSION['disparos'])) {
        $mensaje = "Casilla ya utilizada";
    } else {
        $_SESSION['disparos'][] = $clave;
        $_SESSION['intentos']--;

        if ($_SESSION['tablero'][$x][$y] === 1) {
            $_SESSION['aciertos']++;
            $mensaje = "¡TOCADO!";
        } else {
            $mensaje = "Agua...";
        }
    }
}

$fin = ($_SESSION['intentos'] <= 0 || $_SESSION['aciertos'] >= 16);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juedo de los barcos</title>
    <style>
        table { border-collapse: collapse; margin: 20px auto; }
        td { width: 40px; height: 40px; text-align: center; border: 1px solid #000; }
        button { width: 100%; height: 100%; border: none; background: none; }
        form {width: 100%; height: 100%;}
        .agua { background-color: blue; }
        .tocado { color: red; font-weight: bold; }
    </style>
</head>

<body>
    <h2 style="text-align:center;">Juego de los barcos</h2>

    <p style="text-align:center;">
        Intentos restantes: <?= $_SESSION['intentos'] ?> <br>
        Aciertos: <?= $_SESSION['aciertos'] ?> <br>
        Casillas por descubrir: <?= 16 - $_SESSION['aciertos'] ?> <br>
        <?= $mensaje ?>
    </p>

    <table>
        <?php for ($i = 0; $i < 10; $i++) : ?>
            <tr>
                <?php for ($j = 0; $j < 10; $j++):
                    $clave = "$i,$j";
                    $usada = in_array($clave, $_SESSION['disparos']);
                    $contenido = '';
                    $clase = '';

                    if ($usada) {
                        if ($_SESSION['tablero'][$i][$j] === 1) {
                            $contenido = '<span class="tocado">X</span>';
                        } else {
                            $clase = 'agua';
                        }
                    }
                ?>
                    <td class="<?= $clase ?>">
                        <?php if (!$usada && !$fin): ?>
                            <form method="post">
                                <input type="hidden" name="x" value="<?= $i ?>">
                                <input type="hidden" name="y" value="<?= $j ?>">
                                <button type="submit"></button>
                            </form>
                        <?php else: ?>
                            <?= $contenido ?>
                        <?php endif; ?>
                    </td>
                <?php endfor; ?>
            </tr>
        <?php endfor; ?>
    </table>

    <div style="text-align:center;">
        <?php if ($fin): ?>
            <p><strong>¡Fin de la partida!</strong></p>
        <?php endif; ?>
        <form method="post" action="index.php">
            <button type="submit">Nueva partida</button>
        </form>
    </div>
</body>

</html>