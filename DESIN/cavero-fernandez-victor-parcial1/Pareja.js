export class Pareja {
    #nombre;
    #bailarin1;
    #bailarin2;
    #nivelPareja;
    constructor(bailarin1, bailarin2) {
        this.#bailarin1 = bailarin1;
        this.#bailarin2 = bailarin2;
        this.#nivelPareja = this.calcularNivel();
        this.#nombre = this.generarNombre();
    }

    get nombre() {
        return this.#nombre;
    }

    get bailarin1() {
        return this.#bailarin1;
    }

    get bailarin2() {
        return this.#bailarin2;
    }

    get nivelPareja() {
        return this.#nivelPareja;
    }

    //Defino el nivel de la pareja en función del nivel del integrante con menos nivel
    calcularNivel() {
        if (this.bailarin1.nivel === "inicial" || this.bailarin2.nivel === "inicial") {
            return "inicial";
        } else if (this.bailarin1.nivel === "intermedio" || this.bailarin2.nivel === "intermedio") {
            return "intermedio";
        } else {
            return "avanzado";
        }
    }

    //SE QUE ES UN POCO CHAPUZA, PERO ES FUNCIONAL
    generarNombre() {
        let result = "";
        let nombres = this.bailarin1.nombre + " " + this.bailarin2.nombre;
        let generar = nombres.split("").forEach(e => { if ((nombres.indexOf(e) % 2 !== 0) && e !== " ") return result += e });

        // for (let i = 1; i < generar.length; i++) {
        //     if (i % 2 !== 0 && generar[i] !== " ") {
        //         result += generar[i];
        //     } 
        // }
        return result.toUpperCase();
    }

    toString() {
        if (this.bailarin1.profesor && this.bailarin2.profesor) {
            return `Nombre: ${this.nombre} - "Profesor 1: ${this.bailarin1.nombre} - Profesor 2: ${this.bailarin2.nombre}`;
        } else {
            return `Nombre: ${this.nombre} - "Bailarin 1: ${this.bailarin1.nombre} - Bailarin 2: ${this.bailarin2.nombre}`;
        }

    }
} 