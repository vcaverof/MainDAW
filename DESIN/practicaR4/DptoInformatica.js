
export class DptoInformatica {
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


