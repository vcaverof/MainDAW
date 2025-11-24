//FORMAS DE INICIALIZAR
//Inicialización directa (literal)
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[0][1]); // 2 (fila 0, columna 1)

//Inicialización vacía y luego rellenar
const filas = 3;
const columnas = 3;
matriz = [];

for (let i = 0; i < filas; i++) {
    matriz[i] = []; // cada fila es un array
    for (let j = 0; j < columnas; j++) {
        matriz[i][j] = 0; // valor inicial
    }
}
console.log(matriz); // [[0,0,0],[0,0,0],[0,0,0]]

//Usando Array.from
filas = 3, columnas = 4;
matriz = Array.from({ length: filas }, () => Array(columnas).fill(0));
console.log(matriz); // [[0,0,0,0],[0,0,0,0],[0,0,0,0]]

//ACCESO Y MODIFICACIÓN
const matriz = [
    [10, 20],
    [30, 40]
];

console.log(matriz[1][0]); // 30
matriz[1][1] = 99;         // cambiar valor
console.log(matriz);       // [[10,20],[30,99]]


//RECORRER UN ARRAY BIDIMENSIONAL
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Fila ${i}, Columna ${j}: ${matriz[i][j]}`);
    }
}

//EJEMPLOS PRÁCTICOS
//Suma todos los elementos
const matriz = [
    [1, 2],
    [3, 4]
];
let suma = 0;
for (let fila of matriz) {
    for (let valor of fila) {
        suma += valor;
    }
}
console.log("Suma total:", suma); // 10

//Crear tabla de multiplicar
filas = 5, columnas = 5;
const tabla = Array.from({ length: filas }, (_, i) =>
    Array.from({ length: columnas }, (_, j) => (i + 1) * (j + 1))
);
console.log(tabla);
/*
[
 [1,2,3,4,5],
 [2,4,6,8,10],
 [3,6,9,12,15],
 [4,8,12,16,20],
 [5,10,15,20,25]
]
*/

//Representar un tablero de un juego
const tablero = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];
console.log(tablero[0][2]); // "X"

