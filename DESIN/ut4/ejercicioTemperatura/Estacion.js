const MAX = 40;
const MIN = -20;
const DIAS = 30;

export class Estacion {
    #ciudad;
    #temperaturas;
    constructor(ciudad) {
        this.#ciudad = ciudad;
        this.#temperaturas = this.generarTemperaturas();
    }

    get ciudad() {
        return this.#ciudad;
    }

    get temperaturas() {
        return this.#temperaturas
    }

    generarTemperaturas() {
        let temperaturas = [];
        for (let i = 0; i < DIAS; i++) {
            const temperatura = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
            temperaturas.push(temperatura);
        }
        return temperaturas;
    }

    modificarTemperatura(dia, nuevaTemperatura) {
        if (dia < 1 || dia > DIAS) {
            console.log("Introduce un día del mes válido");
            return
        }

        this.temperaturas[dia - 1] = nuevaTemperatura; //Se resta uno para que coincida con el indice del array temperaturas
        console.log(`La nueva temperatura del dia ${dia} en ${this.ciudad} es ${nuevaTemperatura}`);
    }

    calcularMedia() {
        return (this.temperaturas.reduce((acc, t) => acc + t, 0) / this.temperaturas.length).toFixed(2);
    }

    mostrarTemperaturas() {
        // console.log(`Temperaturas de ${this.ciudad}:`);
        console.table(this.temperaturas);
    }
}