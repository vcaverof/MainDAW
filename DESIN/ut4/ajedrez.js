//Creaciond el tablero
const tablero = [];
const filas = 8;
const columnas = 8;
for (let i = 0; i < filas; i++) {
    tablero[i] = [];
    for (let j = 0; j < columnas; j++) {
        tablero[i][j] = " ";
    }
}

function Figura() {
    this.x = 0;
    this.y = 0;
    // moverA(x, y) = function () {

    // }
}

let figura = new Figura();

let rey = { tipo: 'R', ...figura };
let reina = { tipo: 'Q', ...figura };
let torre = { tipo: 'T', ...figura };
let alfil = { tipo: 'A', ...figura };
let caballo = { tipo: 'C', ...figura };
let peon = { tipo: 'P', ...figura };

let figuras = [rey, reina, torre, torre, alfil, alfil, caballo, caballo, peon, peon, peon, peon, peon, peon, peon, peon];

//Coloca todas las piezas en zonas aleatorias del tablero
function colocarPieza(figura, tablero) {
    let filaRandom = () => Math.floor(Math.random() * 7.99);
    let columnaRandom = () => Math.floor(Math.random() * 7.99);

    fila = filaRandom();
    columna = columnaRandom();

    tablero[fila][columna] = figura.tipo;

}

for (let i = 0; i < figuras.length; i++) {
    colocarPieza(figuras[i], tablero);
}

console.table(tablero);

