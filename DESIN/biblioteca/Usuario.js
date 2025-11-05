export class Usuario {
    #nombre;
    #tipo;
    constructor(nombre, tipo = "Lector") {
        this.#nombre = nombre;
        this.#tipo = tipo;
    }

    get nombre() {
        return this.#nombre;
    }

    get tipo() {
        return this.#tipo;
    }

    saludar() {
        return `Saludo personalizado para ${this.nombre}`;
    }
}
