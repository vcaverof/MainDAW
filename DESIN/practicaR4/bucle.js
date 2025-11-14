const FILAS = 5;
const COLUMNAS = 5;


const matriz = Array(FILAS).fill().map(() => Array(COLUMNAS).fill(null));
matriz[3][3] = "equipo1";
console.log(matriz);


console.log(buscarPosicion(matriz, "equipo1")); 

