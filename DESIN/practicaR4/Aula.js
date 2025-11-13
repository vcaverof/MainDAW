//////////////////////////////////////////////////////////////////////////////
//////////FUNCIONA TODO MENOS SOBREPASAR COLUMNAS SI TIENEN PORTATIL//////////
//////////////////////////////////////////////////////////////////////////////

export class Aula {
    #numero; //Entero
    #equipos;  //Equipo [][]
    #puestos; //Entero
    #filas;
    #columnas;
    constructor(numero, filas, columnas) {
        this.#numero = numero;
        this.#filas = filas;
        this.#columnas = columnas;
        this.#equipos = [];
    }

    get filas() {
        return this.#filas;
    }

    get columnas() {
        return this.#columnas;
    }

    get equipos() {
        return this.#equipos;
    }

    set equipos(value) {
        this.#equipos = value;
    }

    construirAula() {
        for (let i = 0; i < this.filas; i++) {
            this.equipos[i] = [];
            for (let j = 0; j < this.columnas; j++) {
                this.equipos[i][j] = "-";
            }
        }
    }

    activaEquipo(equipo, fila, columna) { //No comprueba el tipo de personal del usuario (portatil o sobremesa)
        if (fila >= 0 && fila <= this.filas && columna >= 0 && columna <= this.columnas) {
            if (this.equipos[fila][columna] === "-") {
                this.equipos[fila][columna] = equipo;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    getPosicion(idEquipo) { //No controla correctamente la ausencia del equipo mediante
        let result = [];
        for (let i = 0; i < this.equipos.length; i++) {
            for (let j = 0; j < this.equipos[i].length; j++) {
                if (this.equipos[i][j].id === idEquipo) {
                    result.push(i, j);
                    break;
                } 
            }
        }
        return result;
    }

    getPorcentajeOcupacion() {
        //Cuenta cuantos equipos hay en la clase
        let contadorEquipos = 0;
        for (let i = 0; i < this.equipos.length; i++) {
            for (let j = 0; j < this.equipos[i].length; j++) {
                if (this.equipos[i][j] !== "-") {
                    contadorEquipos++;
                } 
            }
        }

        //Dividde el número de equipos en clase, entre la cantidad de espacios en la clase
        return ((contadorEquipos) / (this.filas * this.columnas)) * 100;
    }
}

