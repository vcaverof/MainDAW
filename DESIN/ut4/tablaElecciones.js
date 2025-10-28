//CREAR UNA TABLA CON TODOS LOS COLEGIOS ELECTORALES Y PARTIDOS CON SUS VOTOS ASOCIADOS
let sedes = ["Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"];
let partidos = ["PV", "OV", "VpSI", "UPV"];

let votos = () => Math.floor((Math.random() * 6) + 5);

// Inicializamos la matriz con una fila por partido
let tabla = partidos.map(partido => {
    let fila = { Partido: partido };
    for (let sede of sedes) {
        fila[sede] = votos();
    }
    return fila;
});

console.table(tabla);



//SUPER-RETO: MOSTRAR EL RECUENTO DE VOTOS POR PARTIDO DE FORMA ORDENADA
// Calcular total de votos por partido
let totales = tabla.map(fila => {
    let total = sedes.reduce((acc, sede) => acc + fila[sede], 0);
    return { Partido: fila.Partido, Total: total };
});

// Ordenar de mayor a menor
totales.sort((a, b) => b.Total - a.Total);

// Mostrar recuento ordenado
console.table(totales);