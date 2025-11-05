class Rio {
    #nombre;
    #cuenca;
    #caudalMedio;
    #poblaciones;
    constructor(nombre, cuenca) {
        this.#nombre = nombre;
        this.#cuenca = cuenca;
        this.#caudalMedio = 0;
        this.#poblaciones = [];

        document.write(`Nuevo rio ${this.nombre}, de la cuenca: ${this.cuenca}<br>`);
    }

    get nombre() {
        return this.#nombre;
    }

    get cuenca() {
        return this.#cuenca;
    }

    get cuadalMedio() {
        return this.#caudalMedio;
    }

    get poblaciones() {
        return this.#poblaciones;
    }

    agregarPoblacion(poblacion) {
        let esta = false;
        for (let i = 0; i < this.poblaciones.length; i++) {
            if (this.poblaciones[i] == poblacion) {
                esta = true;
                break;
            }
        }

        if (esta) {
            document.write("La población ya está registrada");
        } else {
            this.poblaciones.push(poblacion);
            document.write(`El rio ${this.nombre}, pasa por ${poblacion}<br>`)
        }
    }

    eliminarPoblacion(poblacion) {
        for (let i = 0; i < this.poblaciones.length; i++) {
            if (this.poblaciones[i] == poblacion) {
                this.poblaciones.splice(i, 1);
                document.write(`El rio ${this.nombre}, no pasa por ${poblacion}<br>`)
            }
        }
    }

    modificarCaudalmedio(numero) {
        this.caudalMedio = numero;
    }

    imprimeNombre() {
        document.write(`Nombre: ${this.nombre}<br> `);
    }

    imprimeCuenca() {
        document.write(`Cuenca: ${this.cuenca}<br> `);
    }

    imprimeCaudal() {
        if (this.caudalMedio !== 0) {
            document.write(`Caudal medio: ${this.caudalMedio}<br> `);
        } else {
            document.write('Caudal medio: No consta<br>');
        }
    }

    imprimePoblaciones() {
        let result = "";
        for (let item of this.poblaciones) {
            result += item + " ";
        }
        if (result !== "") {
            document.write(`Poblaciones: ${result}<br> `);
        } else {
            document.write('Poblaciones: No consta<br>');
        }
    }

    imprimeRio() {
        document.write(`Nombe: ${this.nombre} - Cuenca: ${this.cuenca} - Caudal${this.caudalMedio} - Poblaciones: ${this.poblaciones.join(" ")}<br>`);
    }

    ordenarRiosCaudal(...rio) {
        rio.sort((a, b) => a.caudalMedio > b.caudalMedio);

        let result = "";
        for (let item of rio) {
            result += item.nombre + " ";
        }
        if (result !== "") {
            document.write(`Los rios ordenados por caudal son: ${result}<br> `);
        } else {
            document.write('No consta<br>');
        }
    }
}





