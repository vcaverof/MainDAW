import {Miembro} from "./Miembro.js";
export class Hijo extends Miembro{
    #moto;
    constructor(nombre, apellidos, moto = "Sin moto") {
        super(nombre, apellidos);
        this.#moto = moto;
    }

    get moto () {
        return this.#moto;
    }
}

