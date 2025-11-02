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

function Figura(tipo) {

    this.tipo = tipo;
    this.x = 0;
    this.y = 0;

    //IMPORTANTE AÑADIR EL THIS
    this.moverA = function(x, y) {
        //Primero vaciar la posicion anterior
        tablero[this.y][this.x] = " ";

        //Seleccionar las coordenadas nuevas
        this.x = x;
        this.y = y;

        //Colocar la figura en su nueva posicion
        tablero[y][x] = this.tipo
    }

}

let figura = new Figura();

let rey = new Figura('R');
let reina = new Figura('Q');
let torre = new Figura('T');
let alfil = new Figura('A');
let caballo = new Figura('C');
let peon = new Figura('P');

let figuras = [rey, reina, torre, torre, alfil, alfil, caballo, caballo, peon, peon, peon, peon, peon, peon, peon, peon];

//Coloca todas las piezas en zonas aleatorias del tablero
function colocarPieza(figura, tablero) {
    let fila, columna;

    //Comprobar si la celda está ocupada por otra pieza
    do {
        fila = Math.floor(Math.random() * filas);
        columna = Math.floor(Math.random() * columnas);
    } while (tablero[fila][columna] !== " ");

    tablero[fila][columna] = figura.tipo;
}


for (let i = 0; i < figuras.length; i++) {
    colocarPieza(figuras[i], tablero);
}

console.table(tablero);

rey.moverA(4,7);

console.table(tablero);

