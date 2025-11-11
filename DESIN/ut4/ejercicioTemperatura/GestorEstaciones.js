import { Estacion } from "./Estacion.js";

export class GestorEstaciones {
    #estaciones
    constructor() {
        this.#estaciones = [];
    }

    get estaciones() {
        return this.#estaciones;
    }

    set estaciones(value) {
        this.#estaciones = value;
    }

    addCiudad(ciudad) {
        if (this.#estaciones.some(e => e.ciudad == ciudad)) {  //Comprobar si ya existe dicha estación
            console.log(`La estación ${ciudad} ya existe`);
            return;
        } else {
            const estacion = new Estacion(ciudad);
            this.estaciones.push(estacion);
            console.log(`Ciudad ${ciudad} añadida con éxito`);
        }
    }

    eliminarCiudad(ciudad) {
        this.estaciones = this.estaciones.filter(e => e.ciudad !== ciudad); //Devuelve todas las estaciones con una ciudad diferente a la indicada
        console.log(`Ciudad ${ciudad} eliminada con éxito`);
    }

    // Buscar estación por ciudad
    buscarCiudad(ciudad) {
        return this.estaciones.find(est => est.ciudad === ciudad);
    }

    mostrarEstaciones() {
        this.estaciones.forEach(est => est.mostrarTemperaturas());
    }

    toHTML() {
        let html = "<table>";

        // Cabecera con días + columna de media
        html += "<tr><th></th>";
        for (let d = 1; d <= 30; d++) {
            html += `<th>${d}</th>`;
        }
        html += "<th>Media</th></tr>";

        // Filas con temperaturas + media
        this.estaciones.forEach(est => {
            html += `<tr><td>${est.ciudad}</td>`;
            est.temperaturas.forEach(temp => {
                html += `<td>${temp}</td>`;
            });
            html += `<td>${est.calcularMedia()}</td></tr>`;
        });

        html += "</table>";
        return html;
    }
}

