const conjunto = new Set([1, 2, 3, 3, 4]);

// Métodos principales
conjunto.add(5);        // Añadir → {1,2,3,4,5}
conjunto.has(3);        // ¿Existe? → true
conjunto.delete(2);     // Eliminar → {1,3,4,5}
conjunto.values()       //Objeto iterable con cada uno de los valores del conjunto
conjunto.size;          // Tamaño → 4

// Recorrer
for (let valor of conjunto) {
    console.log(valor);
}
conjunto.clear();       // Vaciar
