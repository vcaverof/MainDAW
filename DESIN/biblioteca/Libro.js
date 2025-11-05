export class Libro {
    #titulo;
    #autor;
    #año;
    #disponible;
    constructor(titulo, autor, año) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#año = año;
        this.#disponible = true;
    }

    get titulo() {
        return this.#titulo;
    }

    get autor() {
        return this.#autor;
    }

    get año() {
        return this.#año;
    }

    get disponible() {
        return this.#disponible;
    }

    info() {
        return `Titulo: ${this.titulo} - Autor: ${this.autor} - Año: ${this.año} - Disponible: ${this.disponible}`;
    }

    prestar() {
        this.#disponible = false;
        return `Libro ${this.titulo} prestado.`;
    }

    devolver() {
        this.#disponible = true;
        return `Libro ${this.titulo} devuelto.`;
    }

    static compararPorAño(libro1, libro2) {
        if (libro1 instanceof Libro && libro2 instanceof Libro) {
            if (libro1.año > libro2.año) {
                return `${libro1.titulo} es más moderno que ${libro2.titulo}`;
            } else if (libro1.año < libro2.año) {
                return `${libro1.titulo} es más antiguo que ${libro2.titulo}`;
            } else {
                return `${libro1.titulo} es del mismo año que ${libro2.titulo}`;
            }
        }
    }
}