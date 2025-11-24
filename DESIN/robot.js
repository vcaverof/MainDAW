export class Pareja {
    #nombre;
    #x;
    #y;
    #direccion;
    constructor(x, y, direccion) {
        this.#nombre = "pareja1";
        this.#x = x;
        this.#y = y;
        this.#direccion = direccion; //Empieza siempre mirando al norte
    }

    get x() {
        return this.#x;
    }

    set x(value) {
        this.#x = value;
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        this.#y = value;
    }

    get direccion() {
        return this.#direccion;
    }

    set direccion(value) {
        this.#direccion = value;
    }

    girarDerecha() {
        if (this.direccion == "norte") {
            this.direccion = "este";
            return;
        } else if (this.direccion == "este") {
            this.direccion = "sur";
            return;
        } else if (this.direccion == "sur") {
            this.direccion = "oeste";
            return;
        } else if (this.direccion == "oeste") {
            this.direccion = "norte";
            return;
        }
    }

    girarIzquierda() {
        if (this.direccion == "norte") {
            this.direccion = "oeste";
            return;
        } else if (this.direccion == "oeste") {
            this.direccion = "sur";
            return;
        } else if (this.direccion == "sur") {
            this.direccion = "este";
            return;
        } else if (this.direccion == "este") {
            this.direccion = "norte";
            return;
        }
    }

    avanzar() {
        if (this.direccion == "norte") {
            this.y++;
            return;
        } else if (this.direccion == "sur") {
            this.y--;
            return;
        } else if (this.direccion == "este") {
            this.x++;
            return;
        } else if (this.direccion == "oeste") {
            this.x--;
            return;
        }
    }

    moverPareja(directriz) {
        let ordenes = directriz.split("");
        for (let i = 0; i < ordenes.length; i++) {
            if (ordenes[i] == "D") {
                this.girarDerecha();
            }

            if (ordenes[i] == "I") {
                this.girarIzquierda();
            }

            if (ordenes[i] == "A") {
                this.avanzar();
            }
        }
    }

}

const filas = 10;
const columnas = 10;
let pareja1 = new Pareja(3, 4, "norte");
const matriz = [];

for (let i = 0; i < filas; i++) {
    matriz[i] = []; // cada fila es un array
    for (let j = 0; j < columnas; j++) {
        matriz[i][j] = " "; // valor inicial
    }
}

matriz[pareja1.x][pareja1.y] = pareja1;
console.table(matriz);

pareja1.moverPareja("DAAIAI");
console.table(matriz);



