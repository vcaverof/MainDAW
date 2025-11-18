import { Publicacion } from "./Publicacion.js";

export class Libro extends Publicacion {
    #isbn;
    #numCopias;
    constructor(titulo, isbn, numCopias) {
        super(titulo);
        this.#isbn = isbn;
        this.#numCopias = numCopias;
    }

    get isbn () {
        return this.#isbn;
    }

    set isbn (value) {
        this.#isbn = value;
    }

    get numCopias () {
        return this.#numCopias;
    }

    verDetalles() {
        return `Titulo: ${this.titulo} - ID: ${this.id} - ISBN: ${this.isbn} - Numero de copias: ${this.numCopias}`;
    }
}