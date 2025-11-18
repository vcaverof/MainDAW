export class Seccion {
    #inventario;
    constructor() {
        this.#inventario = []; //Array de objetos libro
    }

    get inventario() {
        return this.#inventario;
    }

    set inventario(value) {
        this.#inventario = value;
    }

    //Recibe un array de libros
    registrarInventario(libros) {
        for (let libro of libros) {
            if (!this.inventario.includes(libro)) {
                this.inventario.push(libro);
            }
        }
    }

    listarInventario() {
        return this.inventario.map(e => e.titulo);
    }
}