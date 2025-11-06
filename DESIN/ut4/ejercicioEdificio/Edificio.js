import { Propietario } from "./Propietario.js";

export class Edificio {
    #calle;
    #numero
    #cpostal;
    #plantas;
    constructor(calle, numero, cpostal) {
        this.#calle = calle;
        this.#numero = numero;
        this.#cpostal = cpostal;
        this.#plantas = []; //Dentro de las plantas tendremos los Propietarios


        console.log(`Construido nuevo edificio en la calle: ${this.calle} Nº: ${this.numero} CP: ${this.cpostal} `);
    }

    get calle() {
        return this.#calle;
    }

    get numero() {
        return this.#numero;
    }

    get cpostal() {
        return this.#cpostal;
    }

    get plantas() {
        return this.#plantas;
    }

    mostrarPropietarios() {
        const tabla = this.plantas.map(planta =>
            planta.map(puerta => puerta ? puerta.nombre : "Libre")
        );
        console.table(tabla);
    }

    agregarPlantasYPuertas(plantas, puertas) {
        for (let i = 0; i < plantas; i++) {
            this.plantas[i] = [];
            for (let j = 0; j < puertas; j++) {
                this.plantas[i][j] = "Vacio";
            }
        }
    }

    asignarPropietario(propietario, planta, puerta) {
        if (planta >= 0 && planta < this.plantas.length && puerta >= 0 && puerta < this.plantas[planta].length) { //Comprueba si la planta y la puerta existen
            if (this.plantas[planta][puerta] === "Vacio") { //Comprueba que la puerta indicada en la planta indicada no está ocupada por alguien
                this.plantas[planta][puerta] = propietario;
                console.log(`${propietario.nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}`);
            } else {
                console.log(`La puerta ${puerta} de la planta ${planta} ya tiene un propietario: ${this.plantas[planta][puerta].nombre}`);
            }
        } else {
            console.log(`Error: la planta ${planta} o la puerta ${puerta} no existen en el edificio.`);
        }
    }

}




