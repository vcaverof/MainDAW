export class Edificio {
    #calle;
    #numero;
    #cpostal;
    #plantas;
    constructor(calle, numero, cpostal) {
        this.#calle = calle;
        this.#numero = numero;
        this.#cpostal = cpostal;
        this.#plantas = []; //Dentro de las plantas tendremos los Propietarios

        console.log(`Construido nuevo edificio en la calle ${this.#calle} con número ${this.#numero} y código postal ${this.#cpostal}`);
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
        const plantasExistentes = this.plantas.length;

        for (let i = 0; i < plantas; i++) {
            const nuevaPlanta = plantasExistentes + i
            this.plantas[nuevaPlanta] = [];

            for (let j = 0; j < puertas; j++) {
                this.plantas[nuevaPlanta][j] = "Vacio";
            }
        }
    }

    agregarPropietario(propietario, planta, puerta) {

        //Comprobamos que la planta y la puerta existan
        if (planta < 0 || planta >= this.plantas.length || puerta < 0 || puerta >= this.plantas[planta].length) {
            console.warn(`❌ La planta ${planta} o la puerta ${puerta} no existen.`);
            return;
        }
        if (this.plantas[planta][puerta] === "Vacio") {
            this.plantas[planta][puerta] = propietario;
            console.log(`✔️ Propietario ${propietario.nombre} añadido en planta ${planta}, puerta ${puerta}`);
        } else {
            console.warn(`❌ La puerta ${puerta} de la planta ${planta} ya está ocupada.`);
        }

    }

    getNumeroPlantas() {
        return this.plantas.length;
    }

    getNumeroPuertas(planta) {
        return this.plantas[planta].length;
    }

    getPropietario(planta, puerta) {
        return this.plantas[planta][puerta];
    }
}