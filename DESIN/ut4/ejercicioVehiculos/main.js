let colores = ["azul", "rojo", "verde"];
const coche = "Coche";

function generarVehiculos() {
    const carretera = [];

    const numCoches = Math.floor(Math.random() * 4) + 1;
    const numCamiones = Math.floor(Math.random() * 4) + 1;

    rellenarVehiculos(carretera, numCoches, "Coche");
    rellenarVehiculos(carretera, numCamiones, "Camion");

    return carretera;
}

function capturarReloj() {
    const fecha = new Date();
    return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
}

function rellenarVehiculos(carretera, numVehiculos, tipo) {
    for (let i = 0; i < numVehiculos; i++) {
        const pasajeros = Math.floor(Math.random() * 7) + 1;
        if (tipo === "Coche") {
            const color = colores[Math.floor(Math.random() * colores.length)];
            carretera.push(new Coche(pasajeros, color));
        } else {
            const tara = Math.floor(Math.random() * 10000);
            carretera.push(new Camion(pasajeros, tara));
        }
    }
}


function mostrarVehiculos() {
    let contador = 0;
    const id = setInterval(() => {
        const vehiculos = generarVehiculos();
        const hora = capturarReloj();

        for (let v of vehiculos) {
            const tipo = v.constructor.name;
            const pasajeros = v.pasajeros.toString();
            const extra = v instanceof Coche ? "Color: " + v.color : "Tara: " + v.tara;
            document.write(`Hora: ${hora} || Tipo: ${tipo} || Pasajeros: ${pasajeros} || ${extra}<br>`);
        }

        contador++;
        if (contador === 5) {
            clearInterval(id);

        }
    }, 2000);
}

mostrarVehiculos();