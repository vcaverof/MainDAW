import { GestorEstaciones } from "./GestorEstaciones.js";

const gestor = new GestorEstaciones();

gestor.addCiudad("Oviedo");
gestor.addCiudad("Santander");
gestor.addCiudad("Valladolid");
gestor.addCiudad("Oviedo");

gestor.mostrarEstaciones();

const estacionOviedo = gestor.buscarCiudad("Oviedo");
estacionOviedo.modificarTemperatura(5, 25); //DIA, NUEVA TEMPERATURA

gestor.eliminarCiudad("Valladolid");

gestor.mostrarEstaciones();

document.getElementById("tabla").innerHTML = gestor.toHTML();