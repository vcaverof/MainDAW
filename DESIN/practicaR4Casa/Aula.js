export class Aula {
    #numero;
    #equipos;
    #puestos;
    #filas;
    #columnas;
    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#filas = filas;
        this.#columnas = columnas;
        this.#puestos = filas * columnas;
        this.#equipos = this.construirAula();
    }

    get filas () {
        return this.#filas;
    }

    get columnas () {
        return this.#columnas;
    }

    get equipos () {
        return this.#equipos;
    }

    get numero () {
        return this.#numero;
    }

    get puestos () {
        return this.#puestos;
    }

    construirAula() {
        this.#equipos = [];
        for (let i = 0; i < this.filas; i++) {
            this.equipos[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                this.equipos[i][j] = "null";
            }
        }
        return this.equipos;
    }


    activaEquipo(equipo, fila, columna) {
        if (fila >= 0 && fila < this.filas && columna >= 0 && columna < this.columnas) {
            if (this.equipos[fila][columna] === "null") {
                this.equipos[fila][columna] = equipo;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    getPosicion(idEquipo) {
        for (let i = 0; i < this.equipos.length; i++) {
            for (let j = 0; j < this.equipos[i].length; j++) {
                if (this.equipos[i][j].id === idEquipo) {
                    return {fila: i, columna: j};
                    
                }
            }
        }

        return null;
    }

    getPorcentajeOcupacion() {
        let contadorEquipos = 0;
        for (let i = 0; i < this.equipos.length; i++) {
            for (let j = 0; j < this.equipos[i].length; j++) {
                if (this.equipos[i][j] !== "null") {
                    contadorEquipos++;
                }
            }
        }
        return (contadorEquipos) / (this.#puestos) * 100;
    }
}