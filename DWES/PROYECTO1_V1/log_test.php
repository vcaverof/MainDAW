<?php
require 'vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// Crear el logger
$log = new Logger('mi_logger');

// Añadir un handler (archivo de log)
$log->pushHandler(new StreamHandler(__DIR__ . '/mi_log.log', Logger::DEBUG));

// Escribir mensajes
$log->info('Este es un mensaje informativo');
$log->error('Este es un mensaje de error');
?>
