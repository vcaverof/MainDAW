import { Edificio } from "./Edificio.js";

//Creación del edificio
const edificio1 = new Edificio("Gran Vía", 123, "28013");
edificio1.agregarPlantasYPuertas(2, 2);
edificio1.agregarPlantasYPuertas(2,1);


console.table(edificio1.mostrarPropietarios());