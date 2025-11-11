export class Libro {
    #titulo;
    #autor;
    #anioPublicacion;
    #disponible;
    constructor(titulo, autor, anioPublicacion) {
        this.#titulo = titulo;
        this.#autor = autor;
        this.#anioPublicacion = anioPublicacion;
        this.#disponible = true;
    }

    get titulo () {
        return this.#titulo;
    }

    get autor () {
        return this.#autor;
    }

    get anioPublicacion () {
        return this.#anioPublicacion;
    }

    get disponible () {
        return this.#disponible;
    }


    info() {
        const estado = this.#disponible ? "Disponible" : "Prestado";
        return `Titulo: ${this.titulo} - Autor: ${this.autor} - Año de publicación: ${this.anioPublicacion} - Estado: ${estado}`;
    }

    prestar() {
        if (this.#disponible) {
            this.#disponible = false;
        } else {
            console.log(`El libro ${this.titulo} no está disponible`)
        }
    }

    devolver() {
        this.#disponible = true;
    }
}