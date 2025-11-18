//////////////////////////////////////////////////
//////////FUNCIONA TODO MENOS LAS FECHAS//////////
//////////////////////////////////////////////////

const caracteresDescripcion = 3;
export class Equipo {
    #id;  //Cadena
    #fecha;  //Date
    #descripcion;  //cadena
    #personal;  //booleano
    constructor(descripcion, personal, dias = false) {
        this.#descripcion = descripcion;
        if (personal = true) {
            this.#personal = "P";
        } else {
            this.#personal = "S";
        }
        this.#fecha = this.calcularFecha();
        this.#id = this.generarID();
        
    }

    get id() {
        return this.#id;
    }

    get descripcion() {
        return this.#descripcion;
    }

    get personal() {
        return this.#personal;
    }


    get fecha() {
        return this.#fecha;
    }

    generarID() {
        return `${this.personal}-${this.ultimosCaracteres().toUpperCase()}-${this.fecha.getDate()}-${this.fecha.getMonth() + 1}-${this.fecha.getFullYear()}`;
    }

    //Funcion para comprobar los ultimos 3 caracteres de la descripcion
    ultimosCaracteres() {
        let ultimoCaracteres = "";
        let caracter = "";
        for (let i = 1; ultimoCaracteres.length < caracteresDescripcion; i++) {
            caracter = this.descripcion.charAt(this.descripcion.length - i);
            if (caracter === " ") {
                caracter = this.descripcion.charAt(this.descripcion.length - (i + 1));
                ultimoCaracteres += caracter;
                i++;
            } else {
                ultimoCaracteres += caracter;
            }
        }
        return ultimoCaracteres;
    }

    calcularFecha() {
        const hoy = new Date();
        const anioActual = hoy.getFullYear();
        let fechaInicio = new Date(anioActual, 7, 1);

        if (this.dias !== undefined && this.dias !== null) {
            const fin = new Date(fechaInicio);
            fin.setDate(fin.getDate() + this.dias);
            return fin;
        } else {
            return new Date (anioActual + 1, 5, 30);
        }
    }

    toString() {
        console.log(`ID: ${this.id}`);
    };

}


