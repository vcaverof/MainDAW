export class Usuario {
    #nombre;
    #age;
    #prestamos;
    constructor(nombre, age) {
        this.#nombre = nombre;
        this.#age = age;
        this.#prestamos = [];
    }

    get nombre() {
        return this.#nombre;
    }

    get age() {
        return this.#age;
    }

    get prestamos() {
        return this.#prestamos;
    }

    prestarLibro(libro) {
        if (libro.disponible === true && this.prestamos.length < 3) {
            libro.prestar();
            this.prestamos.push(libro);
            console.log(`El libro "${libro.titulo}" ha sido prestado a ${this.nombre}`);
        } else {
            console.log(`El libro ${libro.titulo} no está disponible`);
        }
    }

    devolverLibro(libro) {
        const index = this.#prestamos.indexOf(libro);
        if (index !== -1) {
            libro.devolver();
            this.#prestamos.splice(index, 1);
            console.log(`El libro ${libro.titulo} ha sido devuelto por ${this.nombre}`);
        }
    }

    mostrarPrestamos() {
        console.log("Libros de " + this.nombre);
        if (this.#prestamos.length === 0) {
            console.log("Ninguno");
        } else {
            this.#prestamos.forEach(libro => console.log(libro.info()));
        }
    }
}