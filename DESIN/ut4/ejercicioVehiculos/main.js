let colores = ["azul", "rojo", "verde"];

function generarVehiculos() {
    const carretera = [];
    const numCoches = Math.floor(Math.random() * 4) + 1;
    const numCamiones = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < numCoches; i++) {
        const pasajeros = Math.floor(Math.random() * 7) + 1;
        const color = colores[Math.floor(Math.random() * colores.length)];
        carretera.push(new Coche(pasajeros, color));
    }

    for (let i = 0; i < numCamiones; i++) {
        const pasajeros = Math.floor(Math.random() * 7) + 1;
        const tara = Math.floor(Math.random() * 10000);
        carretera.push(new Camion(pasajeros, tara));
    }

    return carretera;
}

function capturarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours()
    const minutos = ahora.getMinutes()
    const segundos = ahora.getSeconds()

    return `${horas}:${minutos}:${segundos}`;
}


function mostrarVehiculos() {
    // Abrimos el bloque <pre> para simular tabla
    document.write("<pre>");

    let contador = 0;
    const id = setInterval(() => {
        const vehiculos = generarVehiculos();
        const hora = capturarReloj();

        for (let v of vehiculos) {
            const tipo = v.constructor.name.padEnd(10);
            const pasajeros = v.pasajeros.toString().padEnd(10);
            const extra = v instanceof Coche ? "Color: " + v.color : "Tara: " + v.tara;
            document.write(`Hora: ${hora} || Tipo: ${tipo} || Pasajeros: ${pasajeros} || ${extra}<br>`);
        }

        contador++;
        if (contador === 5) {
            clearInterval(id);
            document.write("</pre>");
        }
    }, 2000);
}

mostrarVehiculos();