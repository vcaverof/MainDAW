export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;
    #dias;
    constructor(descripcion, personal, dias) {
        this.#descripcion = descripcion;
        if (personal === true) {
            this.#personal = 'P';
        } else {
            this.#personal = 'S';
        }

        this.#dias = dias;
        this.#fecha = this.calcularFecha();
        this.#id = this.generarID();
    }   

    
    get descripcion () {
        return this.#descripcion;
    }

    get personal () {
        return this.#personal;
    }

    get fecha () {
        return this.#fecha;
    }

    get id () {
        return this.#id;
    }

    get dias () {
        return this.#dias;
    }

    //IMPORTANTE SUMAR UNO A LOS MESES, QUE CUENTAN DISTINTO EN EL DATE()
    generarID() {
        return `${this.personal}-${this.descripcion.toUpperCase().slice(-3)}-${this.fecha.getDate()}-${this.fecha.getMonth() + 1}-${this.fecha.getFullYear()}`;
    }

    //IMPORTANTE LOS MESES SE CUENTAN DESDE 0 HASTA 11 -- ENERO = 0, DICIEMBRE = 11
    calcularFecha() {
        const hoy = new Date();
        const anioActual = hoy.getFullYear();
        let fechaInicio = new Date(anioActual, 8, 1); //El 1 de septiembre, del año actual

        if (this.dias !== undefined && this.dias !== null) {
            const fin = new Date(fechaInicio);
            fin.setDate(fin.getDate() + this.dias);
            return fin;
        } else {
            return new Date (anioActual + 1, 5, 30); //Devuelve el 30 de junio, del año siguiente al actual
        }
    }

    toString() {
        console.log(this.id);
    }

}