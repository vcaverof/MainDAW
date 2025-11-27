<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr> Indice: 
            <?php
                imprimir_array([5, 8, 10, 35]);
            ?>
        </tr>
    </table>
</body>
</html>

<?php

imprimir_array($array) {
    foreach($array as $elemento) {
        echo "<td>". $elemento ."</td>"
    }
}
?>