import { Equipo } from "./Equipo.js";
import { Aula } from "./Aula.js";
import { DptoInformatica } from "./DptoInformatica.js";

const equipo1 = new Equipo("Laboratorio", true);  //Portatil
const equipo2 = new Equipo("Biblioteca", false, 90);  //Sobremesa
console.log(equipo1.id);
console.log(equipo2.id);


let aula1 = new Aula(1, 5, 5);
aula1.activaEquipo(equipo1, 2, 2);
console.table(aula1.equipos);

console.log(aula1.getPosicion(equipo1.id)); // [2, 2]
console.log(aula1.getPosicion(equipo2.id)); // null

console.log("Porcentaje de ocupación: " + aula1.getPorcentajeOcupacion() + "%");

let dpto1 = new DptoInformatica();

console.log(dpto1.addAula(aula1, "2DAW"));
console.log(dpto1.addAula(aula1, "1DAW"));
console.table(dpto1.aulas);

console.log(dpto1.getUbicacion(equipo1.id));