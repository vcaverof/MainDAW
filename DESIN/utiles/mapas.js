const mapa = new Map();

// Métodos principales
mapa.set("nombre", "Victor");   // Añadir
mapa.set("edad", 30);
mapa.get("nombre");             // Obtener → "Victor"
mapa.has("edad");               // ¿Existe? → true
mapa.delete("edad");            // Eliminar
mapa.size;                      // Tamaño → 1

// Recorrer
for (let [clave, valor] of mapa) {
    console.log(clave, valor);
}
mapa.clear();                   // Vaciar
