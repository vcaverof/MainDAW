import { Padre } from "./Padre.js";
import { Hijo } from "./Hijo.js";
import { Miembro } from "./Miembro.js";


console.log('-----DATOS MIEMBRO-----');
let m1 = new Miembro("Victor", "Cavero Fernandez");
console.log(`Nombre: ${m1.nombre} - Apellidos: ${m1.apellidos}`);
m1.comer();

console.log('-----DATOS HIJO-----');
let h1 = new Hijo("Pedro", "Sanchez Perez", "Yamaha");
console.log(`Nombre: ${h1.nombre} - Apellidos: ${h1.apellidos} - Moto: ${h1.moto}`);
h1.comer();
h1.cenar();

console.log("----DATOS PADRE----");
let p1 = new Padre("Paco", "Sanchez Perez", "Mercedes");
console.log(`Nombre: ${p1.nombre} - Apellidos: ${p1.apellidos} - Coche: ${p1.coche}`);
p1.comer();
p1.cenar();