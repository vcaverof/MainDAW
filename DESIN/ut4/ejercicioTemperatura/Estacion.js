const max = 40;
const min = -20;
const dias = 30;

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
        for (let i = 0; i < dias; i++) {
            const temperatura = Math.floor(Math.random() * (max - min + 1) + min);
            temperaturas.push(temperatura);
        }
        return temperaturas;
    }

    modificarTemperatura(dia, nuevaTemperatura) {
        if (dia < 1 || dia > 30) {
            console.log("Introduce un día del mes válido");
            return
        }

        this.temperaturas[dia - 1] = nuevaTemperatura; //Se resta uno para que coincida con el indice del array temperaturas
        console.log(`La nueva temperatura del dia ${dia} en ${this.ciudad} es ${nuevaTemperatura}`);
    }

    calcularMedia() {
        const suma = this.temperaturas.reduce((acc, t) => acc + t, 0);
        return (suma / this.temperaturas.length).toFixed(2);
    }

    mostrarTemperaturas() {
        // console.log(`Temperaturas de ${this.ciudad}:`);
        console.table(this.temperaturas);
    }
}