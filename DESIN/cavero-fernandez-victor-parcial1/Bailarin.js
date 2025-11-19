export class Bailarin {
    #nombre;
    #apellidos;
    #nivel;
    #profesor;
    constructor(nombre, apellidos, nivel, profesor) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;

        if (nivel !== "inicial" && nivel !== "intermedio" && nivel !== "avanzado") {
            console.log("Nivel incorrecto. Se ha establecido automáticamente a inicial");
            this.#nivel = "inicial";
        } else {
            this.#nivel = nivel;
        }

        if (!profesor) {
            this.#profesor = false;
        } else {
            this.#profesor = true;
        }
    }

    get nombre () {
        return this.#nombre;
    }

    get apellidos () {
        return this.#apellidos;
    }

    get nivel () {
        return this.#nivel;
    }

    get profesor () {
        return this.#profesor;
    }

    toString() {
        console.log(`${this.nombre} - ${this.apellidos}`);
    }
}