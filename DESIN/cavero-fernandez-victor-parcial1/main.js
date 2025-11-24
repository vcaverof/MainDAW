import { Festival } from "./Festival.js";
import { SistemaGestor } from "./SistemaGestor.js";
import { Bailarin } from "./Bailarin.js";
import { Pareja } from "./Pareja.js";


//Creamos el gestor general de los festivales
const gestor = new SistemaGestor();

//Creamos un par de festivales en distintas provincias
const festivalMadrid = new Festival("Festival Swing Madrid", "Madrid", new Date(2026, 2, 19));
const festivalOviedo = new Festival("Festival Swing Oviedo", "Oviedo", new Date(2026, 4, 22));
const festivalValladolid = new Festival("Festival Swing Valladolid", "Valladolid", new Date(2026, 2, 19));
const festivalZamora = new Festival("Festival Swing Zamora", "Zamora");

gestor.addFestival(festivalMadrid);
gestor.addFestival(festivalOviedo);
gestor.addFestival(festivalValladolid);
gestor.addFestival(festivalZamora);

gestor.mostrarFestivales();

//Creamos bailarines
console.log("-NIVELES VÁLIDOS (inicial, intermedio, avanzado");
let b1 = new Bailarin("Laura", "Perez Otero", "Experto");
let b2 = new Bailarin("Jose", "Garrido González", "avanzado");

let b3 = new Bailarin("Victor", "Cavero Fernández", "inicial");
let b4 = new Bailarin("Alba", "Giménez Orcajo", "inicial");

let p1 = new Bailarin("Juan", "Capdevila Boillo", "avanzado", true);
let p2 = new Bailarin("Marta", "Brieva Ruiz", "avanzado", true);
console.log(b1.profesor);

//Creamos las parejas
let pareja1 = new Pareja(b1, b2);
let pareja2 = new Pareja(b3, b4);
let pareja3 = new Pareja (p1, p2);

festivalMadrid.addPareja(pareja1);
festivalMadrid.addPareja(pareja2);
festivalMadrid.addPareja(pareja3); //PAREJA DE PROFESORES


console.log("----PARTICIPANTES DEL FESTIVAL DE MADRID----");
festivalMadrid.mostrarParticipantes();
