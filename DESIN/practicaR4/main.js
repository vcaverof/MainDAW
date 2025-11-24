import { Equipo } from "./Equipo.js";
import { Aula } from "./Aula.js";
// import { DptoInformatica } from "./DptoInformatica.js";

let equipo1 = new Equipo("Descripcion del equipo A", true);
let equipo2 = new Equipo("Descripcion del equipo B", false);
let equipo3 = new Equipo("Descripcion del equipo C", false);
let aula1 = new Aula(1, 5, 5);

console.log("Datos del equipo");
console.log("Descripcion: " + equipo1.descripcion);
console.log("Personal: " + equipo1.personal);
equipo1.toString(); //Muestra el ID del equipo


aula1.construirAula();
console.log(aula1.activaEquipo(equipo2, 3, 4));
console.log(aula1.activaEquipo(equipo1, 2, 1));
console.log(aula1.activaEquipo(equipo3, 6, 4));

console.log("AULA 1");
console.log(aula1.equipos);

console.log("Posición de equipo2: " + aula1.getPosicion("P-BOP-6-5-2001")); //Busca equipo por ID
console.log("Posición de equipo1: " + aula1.getPosicion("P-AOT-6-5-2001"));  //Busca equipo por ID
console.log("Porcentaje de ocupación: " + aula1.getPorcentajeOcupacion() + "%"); 

// // PRUEBA NO FUNCIONAL (FALTA CORREGIR LA CLASE DPTOINFORMATICA)
// let dpto1 = new DptoInformatica();
// dpto1.addAula(aula1, "A");
// console.log(dpto1);