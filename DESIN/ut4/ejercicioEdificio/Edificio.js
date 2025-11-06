import { Propietario } from "./Propietario.js";
export class Edificio extends Propietario {
    #calle;
    #numero
    #cpostal;
    #plantas;
    constructor(nombre, genero, miembros, calle, numero, cpostal) {
        super(nombre, genero, miembros);
        this.#calle = calle;
        this.#numero = numero;
        this.#cpostal = cpostal;
        this.#plantas = [];


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

    agregarPlantarYPuertas(plantas, puertas) {
        for (let i = 0; i < plantas; i++) {
            for (let i = 0; i < puertas; i++) {
                this.#plantas[i] = [];
            }
        } 

        console.log(this.#plantas.length);
    }

    añadirPersona(personas) {
        for (let i = 0; i < personas.length; i++) {
            for (let j = 0; j < personas[i].length; j++) {
                console.log(`${personas[i][j].nombre} es ahora el propietario de la puerta ${j} de la planta ${i}`);
                this.propietarios.push(personas[i][j].nombre);
            }
        }
    }
}


