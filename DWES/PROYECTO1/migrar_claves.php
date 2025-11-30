<?php
include 'conexion.php';

// Función para detectar si una cadena ya es un hash bcrypt
function esHashBcrypt($clave) {
    return preg_match('/^\$2[aby]\$\d{2}\$[\.\/A-Za-z0-9]{53}$/', $clave);
}

$sql = "SELECT id, clave FROM restaurantes";
$stmt = $conn->query($sql);
$restaurantes = $stmt->fetchAll(PDO::FETCH_ASSOC);

$actualizadas = 0;
$omitidas = 0;

foreach ($restaurantes as $restaurante) {
    $id = $restaurante['id'];
    $clavePlano = $restaurante['clave'];

    // Solo hashear si no tiene formato de hash bcrypt
    if (!esHashBcrypt($clavePlano)) {
        $claveHash = password_hash($clavePlano, PASSWORD_DEFAULT);

        $updateSql = "UPDATE restaurantes SET clave = ? WHERE id = ?";
        $updateStmt = $conn->prepare($updateSql);
        if ($updateStmt->execute([$claveHash, $id])) {
            echo "✅ Contraseña actualizada para ID $id<br>";
            $actualizadas++;
        } else {
            echo "❌ Error al actualizar contraseña para ID $id<br>";
        }
    } else {
        echo "⏩ Contraseña ya hasheada para ID $id<br>";
        $omitidas++;
    }
}

echo "<hr>";
echo "🔄 Total actualizadas: $actualizadas<br>";
echo "⏸️ Total omitidas (ya hasheadas): $omitidas<br>";
?>
