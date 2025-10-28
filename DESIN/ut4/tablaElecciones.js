//CREAR UNA TABLA CON TODOS LOS COLEGIOS ELECTORALES Y PARTIDOS CON SUS VOTOS ASOCIADOS
let sedes = ["Ayuntamiento", "Polideportivo", "Instituto", "Mercado", "Colegio"];
let partidos = ["PV", "OV", "VpSI", "UPV"];
let aux = [[],[]];

let votos = () => Math.floor(Math.random() * 9.99);

for (let i = 0; i < sedes.length; i++) {
    for (let j = 0; j < partidos.length; j++) {
        aux[i].push(votos());
    }
}

console.table(aux);



//SUPER-RETO: MOSTRAR EL RECUENTO DE VOTOS POR PARTIDO DE FORMA ORDENADA