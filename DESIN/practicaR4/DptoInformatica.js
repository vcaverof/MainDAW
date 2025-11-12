import { Equipo } from "./Equipo.js";
import { Aula } from "./Aula.js";

class DptoInformatica {
    #aulas;
    constructor() {
        this.#aulas = new Map();
    }

    get aulas() {
        return this.#aulas;
    }

    addAula(aula, grupo) {
        if (this.aulas.has(aula)) {
            return false;
        } else {
            this.aulas.set(aula, grupo);
            return true;
        }
    }
}

let aula1 = new Aula(1, 5, 5);
let dpto1 = new DptoInformatica();

dpto1.addAula(aula1, "grupoA");

console.log(dpto1);

