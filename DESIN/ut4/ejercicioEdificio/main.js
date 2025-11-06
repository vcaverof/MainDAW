import { Edificio } from "./Edificio.js";
import { Propietario } from "./Propietario.js";



const e1 = new Edificio("Gran Vía", 123, "28013");
e1.agregarPlantasYPuertas(2, 3);

const p1 = new Propietario("Edu", "masculino", 2);
const p2 = new Propietario("Antonio", "masculino", 1);
const p3 = new Propietario("Erik", "masculino", 4);
const p4 = new Propietario("Mayte", "femenino", 2);
const p5 = new Propietario("Mónica", "femenino", 1);
const p6 = new Propietario("Santiago", "masculino", 4);

//Asignación de propietarios
e1.asignarPropietario(p1, 0, 0);
e1.asignarPropietario(p2, 0, 1);
e1.asignarPropietario(p3, 0, 2);
e1.asignarPropietario(p4, 1, 0);
e1.asignarPropietario(p5, 1, 1);
e1.asignarPropietario(p6, 1, 2);

console.table(e1.mostrarPropietarios());






