//////////////////////////////////////////////////
//////////FUNCIONA TODO MENOS LAS FECHAS//////////
//////////////////////////////////////////////////

const caracteresDescripcion = 3;
const anioActual = new Date();
export class Equipo {
    #id;  //Cadena
    #fecha;  //Date
    #descripcion;  //cadena
    #personal;  //booleano
    constructor(descripcion, personal) {
        this.#descripcion = descripcion;
        if (personal = true) {
            this.#personal = "P";
        } else {
            this.#personal = "S";
        }
        this.#fecha = new Date(this.anioActual() + '-06-30');
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
        return `${this.personal}-${this.ultimoCaracteres().toUpperCase()}-${this.fecha.getDay()}-${this.fecha.getMonth()}-${this.fecha.getFullYear()}`;
    }

    //Funcion para comprobar los ultimos 3 caracteres de la descripcion
    ultimoCaracteres() {
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

    //Calcula el año actual
    anioActual() {
        let anio = new Date().getFullYear;
        return anio;
    }

    toString() {
        console.log(`ID: ${this.id}`);
    };

}


// PRUEBAS
let equipo1 = new Equipo("Descripcion del equipo A", true);

console.log("Datos del equipo");
console.log("Descripcion: " + equipo1.descripcion);
console.log("Personal: " + equipo1.personal);
equipo1.toString();
