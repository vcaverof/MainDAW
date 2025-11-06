export class Miembro {
    #nombre;
    #apellidos;
    constructor(nombre = "Sin nombre", apellidos = "Sin apellidos") {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }

    get nombre() {
        return this.#nombre;
    }

    get apellidos() {
        return this.#apellidos;
    }

    comer() {
        console.log("Estoy comiendo");
    }

    cenar() {
        console.log('Estoy cenando');

    }
}

