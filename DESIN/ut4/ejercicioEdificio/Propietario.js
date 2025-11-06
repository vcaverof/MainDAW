export class Propietario {
    #nombre;
    #genero;
    #miembros;
    constructor(nombre, genero, miembros = 1) {
        this.#nombre = nombre;
        this.#genero = genero;
        this.#miembros = miembros;
    }

    get nombre () {
        return this.#nombre;
    }

    get genero () {
        return this.#genero;
    }

    get miembros () {
        return this.#miembros;
    }


}