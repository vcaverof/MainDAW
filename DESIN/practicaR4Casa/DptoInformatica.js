import { Aula } from "./Aula.js";

export class DptoInformatica {
    #aulas;
    constructor() {
        this.#aulas = new Map();
    }

    get aulas() {
        return this.#aulas;
    }

    set aulas(value) {
        this.#aulas = value;
    }

    addAula(aula, grupo) {
        if (this.aulas.has(aula.numero)) {
            return false;
        }

        this.aulas.set(aula.numero, { aula: aula, grupo: grupo });
        return true;
    }
    getUbicacion(idEquipo) {
        for (let [aula, grupo] of this.aulas.entries()) {
            const posicion = aula.getPosicion(idEquipo);
            if (posicion !== null) {
                return `Aula número: ${aula.numero}, Fila: ${posicion.fila}, Columna: ${posicion.columna}`;
            }
        }
        return "Equipo desconocido";
    }

    getNEquipos() {
        let contadorTotal = 0;
        for (let [numero, { aula }] of this.aulas.entries()) {
            contadorTotal += aula.puestos;
        }
        return contadorTotal;
    }
}