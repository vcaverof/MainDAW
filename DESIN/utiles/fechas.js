//IMPORTANTE -- RECORDAR HACER EL +1 AL MES, QUE EN LAS FECHAS DE JS, LOS MESES VAN DE 0-11 (ENERO = 0, DICIEMBRE = 11)

//Crear fechas
const ahora = new Date();                 // Fecha y hora actual
const fechaEspecifica = new Date(2025, 10, 18, 20, 34); // Año, mes(0-11), día, hora, min
const desdeString = new Date("2025-11-18T20:34:00");    // Desde string ISO
const desdeMilisegundos = new Date(1731958440000);      // Desde timestamp (ms desde 1970)

//Obtener partes de fecha
ahora.getFullYear();    // Año → 2025
ahora.getMonth();       // Mes (0-11) → 10 (noviembre)
ahora.getDate();        // Día del mes (1-31)
ahora.getDay();         // Día de la semana (0-6, 0=domingo)
ahora.getHours();       // Hora (0-23)
ahora.getMinutes();     // Minutos (0-59)
ahora.getSeconds();     // Segundos (0-59)
ahora.getMilliseconds(); // Milisegundos (0-999)
ahora.getTime();       // Timestamp en ms desde 1970

//Establecer partes de fecha
ahora.setFullYear(2030);   // Cambiar año
ahora.setMonth(0);         // Cambiar mes (enero)
ahora.setDate(1);          // Cambiar día del mes
ahora.setHours(12);        // Cambiar hora
ahora.setMinutes(0);       // Cambiar minutos
ahora.setSeconds(0);       // Cambiar segundos
ahora.setMilliseconds(0);  // Cambiar ms

//Formatos de salida de fecha
ahora.toString();        // "Tue Nov 18 2025 20:34:00 GMT+0100 (CET)"
ahora.toDateString();    // "Tue Nov 18 2025"
ahora.toTimeString();    // "20:34:00 GMT+0100 (CET)"
ahora.toUTCString();     // "Tue, 18 Nov 2025 19:34:00 GMT"
ahora.toISOString();     // "2025-11-18T19:34:00.000Z"
ahora.toLocaleDateString("es-ES"); // "18/11/2025"
ahora.toLocaleTimeString("es-ES"); // "20:34:00"
ahora.toLocaleString("es-ES");     // "18/11/2025 20:34:00"

//Operaciones utiles
// Diferencia entre dos fechas en ms
const inicio = new Date("2025-01-01");
const fin = new Date("2025-12-31");
const diferencia = fin - inicio; // en ms
const dias = diferencia / (1000 * 60 * 60 * 24); // convertir a días

// Sumar días a una fecha
const fecha = new Date();
fecha.setDate(fecha.getDate() + 7); // +7 días

// Comparar fechas
if (inicio < fin) {
    console.log("Inicio es antes que fin");
}

