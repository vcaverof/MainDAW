import { SistemaGestor } from "./SistemaGestor.js";
export class Festival {
    #nombre;
    #provincia;
    #fecha;
    #participantes;
    #inicial;
    #intermedio;
    #avanzado;
    constructor(nombre, provincia, fecha) {
        this.#nombre = nombre;
        this.#provincia = provincia;
        if (!fecha) {
            this.#fecha = this.calcularViernes();
        } else {
            this.#fecha = fecha;
        }

        this.#inicial = [];
        this.#intermedio = [];
        this.#avanzado = [];
        this.#participantes = []; //[nivelPareja, Pareja {}];
    }

    get nombre() {
        return this.#nombre;
    }

    get provincia() {
        return this.#provincia;
    }

    get fecha() {
        return this.#fecha;
    }

    get participantes() {
        return this.#participantes;
    }

    get inicial() {
        return this.#inicial;
    }

    get intermedio() {
        return this.#intermedio;
    }

    get avanzado() {
        return this.#avanzado;
    }


    //Devuelve el primer viernes del año, pero no comprueba si está libre
    calcularViernes() {
        const DIAS = 7;
        let hoy = new Date();
        let primerViernesAnio = new Date(hoy.getFullYear(), 0, 1) //El mes 0 es enero

        for (let i = 0; i < DIAS; i++) {
            if (primerViernesAnio.getDay() !== 5) { //El 5 sería el viernes (Domingo = 0, Lunes = 1...)
                primerViernesAnio.setDate(primerViernesAnio.getDate() + 1); // +7 días
            }
        }

        return primerViernesAnio;

    }

    addPareja(pareja) { //NO FUNCIONA CORRECTAMENTE
        let nivel = "";
        if (pareja.nivelPareja === "inicial") {
            nivel = this.inicial;
        } else if (pareja.nivelPareja === "intermedio") {
            nivel = this.intermedio;
        } else {
            nivel = this.avanzado;
        }
        if (!nivel.includes(pareja)) {
            if (pareja.bailarin1.profesor && pareja.bailarin2.profesor) {
                nivel.unshift(pareja);
            } else {
                nivel.push(pareja);
            }
        }

        this.participantes.push(nivel);
    }


    mostrarParticipantes() { //NO FUNCIONA CORRECTAMENTE
        console.log("NIVEL INICIAL")
        console.log(this.inicial.toString());
        for (let i = 0; i < this.inicial.length; i++) {
            console.log(this.inicial[i]);
        }

        console.log("NIVEL INTERMEDIO");
        for (let i = 0; i < this.inicial.length; i++) {
            console.log(this.intermedio[i]);
        }

        console.log("NIVEL AVANZADO");
        for (let i = 0; i < this.inicial.length; i++) {
            console.log(this.avanzado[i]);
        }
    }

    toString() {
        //La fecha se muestra en formato String
        console.log(`${this.nombre} - ${this.provincia} - Fecha: ${this.fecha.toLocaleDateString()}`);
    }
}