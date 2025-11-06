import { Miembro } from "./Miembro.js";

export class Padre extends Miembro {
    #coche;
    constructor(nombre, apellidos, coche = "Sin coche") {
        super(nombre, apellidos);
        this.#coche = coche;
    }

    get coche () {
        return this.#coche;
    }

    comer() {
        console.log("Estoy comiendo huevos");
    }

    cenar() {
        console.log("Estoy cenando huevos");
    }
}
