let fechaActual = new Date();
fechaCumple = new Date('2026-03-17');


console.log("Quedan " + Math.ceil(((((fechaCumple - fechaActual) / 1000) / 60) / 60) / 24) + " dias");

