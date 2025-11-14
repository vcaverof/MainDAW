import { Equipo } from "./Equipo.js";
import { Aula } from "./Aula.js";
import { DptoInformatica } from "./DptoInformatica.js";


const FILAS = 5;
const COLUMNAS = 4;

var dptoNaranco = new DptoInformatica();
const asignaciones = [{ aula: "213", grupo: "SMR2A" },
{ aula: "214", grupo: "IOF2" },
{ aula: "215", grupo: "DAW2A" },
{ aula: "216", grupo: "SMR1A" },
{ aula: "217", grupo: "DAM1A" },
{ aula: "218", grupo: "DAM2A" },
{ aula: "220", grupo: "IOF1" }
];
asignaciones.forEach((asignacion) => {
    console.log(dptoNaranco.addAula(new Aula(asignacion.aula, FILAS, COLUMNAS), asignacion.grupo) ? "Se ha insertado el aula " + asignacion.aula : "No se ha podido insertar el aula " + asignacion.aula);
});

console.log("\n%cRECUENTO TOTAL EQUIPOS dptoNaranco: " + dptoNaranco.getNEquipos() + " equipos--------------------\n", 'background: #FADBD8');

console.log("%cACTIVANDO EQUIPOS DE SOBREMESA QUE SE VAN A USAR...", 'background: #222; color: #bada55');
asignaciones.forEach((asignacion) => {
    let aula = dptoNaranco.aulas.get(asignacion.aula).aula;
    for (let i = 0; i < FILAS; i++)
        for (let j = 0; j < COLUMNAS; j++)
            aula.activaEquipo(new Equipo("Descripción equipo " + aula.Numero + "-" + i + "-" + j, false), i, j);
});

asignaciones.forEach((asignacion) => {
    console.table(dptoNaranco.aulas.get(asignacion.aula).aula.equipos);
    console.log("Porcentaje de ocupación tras asignaciones aula " + asignacion.aula + ":" + dptoNaranco.aulas.get(asignacion.aula).aula.getPorcentajeOcupacion() + "%");
});

// function datosPortatiles() {
//     console.log("%cACTIVANDO PORTÁTILES QUE SE VAN A USAR...", 'background: #222; color: #bada55');
// }

// datosPortatiles(); //Pendiente de implementar


console.log("%cEl número total de equipos en el departamento es: " + dptoNaranco.getNEquipos() + " equipos--------------------", 'background: #FADBD8');
