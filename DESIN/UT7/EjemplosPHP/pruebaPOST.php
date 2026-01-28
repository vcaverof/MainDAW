<?php

header('Content-Type: application/json;charset=UTF-8'); // Indica que es un JSON

$nombre = $_POST["nombre"] ?? "";
$edad = $_POST["edad"] ?? "";

echo json_encode([
    "personas" => [
        [
            "nombre" => $nombre,
            "edad" => $edad,
            "mensaje" => "Datos recibidos correctamente",
        ],
        [
            "nombre" => "Pedro",
            "edad" => "34",
            "mensaje" => "Datos recibidos correctamente",
        ],
    ]
]);

$info = file_get_contents('php://input');
$data = json_decode($info, true);

