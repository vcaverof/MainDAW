export class Bailarin {
    #nombre;
    #dni;
    #estilo;
    #sexo;
    #fechaAlta;

    constructor(nombre, dni, estilo, sexo, fechaAlta) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#fechaAlta = fechaAlta;
        this.#estilo = estilo;
        this.#sexo = sexo;
        
    }

    get nombre() {
        return this.#nombre;
    }

    get dni() {
        return this.#dni;
    }

    get estilo() {
        return this.#estilo;
    }

    get sexo() {
        return this.#sexo;
    }

    get fechaAlta() {
        return this.#fechaAlta;
    }
}