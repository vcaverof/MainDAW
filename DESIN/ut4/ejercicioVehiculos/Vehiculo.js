class Vehiculo {
    #pasajeros; //Los atributos privados se declaran antes del constructor y van con #
    constructor(pasajeros) {
        this.#pasajeros = pasajeros;
    }

    set pasajeros(value) {
        this.#pasajeros = value;
    }

    get pasajeros() {
        return this.#pasajeros;
    }
}