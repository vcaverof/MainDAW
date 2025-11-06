import { Edificio } from "./Edificio.js";
import { Propietario } from "./Propietario.js";


let personas = [
    [new Propietario("Edu", "Varon", 5), new Propietario("Antonio", "Varon", 2), new Propietario("Erik", "Varon", 4)],
    [new Propietario("Mayte", "Mujer", 2), new Propietario("Monica", "Mujer"), new Propietario("Santiago", "Varon", 5)]
];

let e1 = new Edificio("Calle Melancolía", "1", "10000");
e1.agregarPlantarYPuertas(2,3);

console.log("Nombre del propietario de la puerta 0 de la planta 1");
