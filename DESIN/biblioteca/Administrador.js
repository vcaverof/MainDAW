import { Usuario } from "./Usuario.js";

export class Administrador extends Usuario {
    #biblioteca;
    constructor(nombre, biblioteca) {
        super(nombre, "Administrador");
        this.#biblioteca = biblioteca;
    }

    agregarLibro(libro) {
        return this.#biblioteca.agregarLibro(libro);
    }

    eliminarLibro(titulo) {
        return this.#biblioteca.eliminarLibro(titulo);
    }

    saludar() {
        return `Hola, soy ${this.nombre} y soy administrador de la biblioteca.`;
    }
}