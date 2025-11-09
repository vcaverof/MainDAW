import { GestorEstaciones } from "./GestorEstaciones.js";

const gestor = new GestorEstaciones();

gestor.añadirCiudad("Oviedo");
gestor.añadirCiudad("Santander");
gestor.añadirCiudad("Valladolid")

gestor.mostrarEstaciones();

const estacionOviedo = gestor.buscarCiudad("Oviedo");
estacionOviedo.modificarTemperatura(5, 25); //DIA, NUEVA TEMPERATURA

gestor.eliminarCiudad("Valladolid");

gestor.mostrarEstaciones();

document.getElementById("tabla").innerHTML = gestor.toHTML();