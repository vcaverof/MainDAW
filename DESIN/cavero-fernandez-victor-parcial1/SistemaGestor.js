import { Festival } from "./Festival.js";

export class SistemaGestor {
    #festivales;
    constructor() {
        this.#festivales = [];
    }

    get festivales() {
        return this.#festivales;
    }

    addFestival(nuevoFestival) {
        if (this.festivales.length === 0) {
            this.festivales.push(nuevoFestival);
            console.log(`Festival de ${nuevoFestival.provincia} añadido con éxito`);
            return;
        } else {
            for (let i = 0; i < this.festivales.length; i++) {
                if (this.festivales[i].fecha === nuevoFestival.fecha) {
                    console.log("No es posible introducir el nuevo festival. Fecha ya ocupada");
                } else {
                    this.festivales.push(nuevoFestival);
                    console.log(`Festival de ${nuevoFestival.provincia} añadido con éxito`);
                   break;
                }
            }
        }

    }

    mostrarFestivales() {
        console.log("--FESTIVALES ACTUALMENTE REGISTRADOS--");
        for (let festival of this.festivales) {
            festival.toString();
        }
    }
}