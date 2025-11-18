export class Publicacion {
    #titulo;
    #idPublicacion;
    constructor(titulo) {
        this.#titulo = titulo;
        this.#idPublicacion = this.generarID();
    }

    get titulo() {
        return this.#titulo;
    }

    get idPublicacion() {
        return this.#idPublicacion;
    }

    generarID() {
        const hoy = new Date();
        const anioActual = hoy.getFullYear();

        return `PUB-${this.titulo.slice(0,3).toUpperCase()}-${anioActual}`;
    }

    toString() {
        console.log(this.idPublicacion);
    }


}
