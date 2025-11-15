//FUNDAMENTOS
//Crear una fecha con la fecha y hora actual
const ahora = new Date();
console.log(ahora);

//Crear una fecha específica (ejemplo: mi cumpleaños).
const cumple = new Date(2001, 2, 17); // Año, Mes (0-11), Día
console.log(cumple);

//Obtener partes de la fecha.
const anioCumple = cumple.getFullYear();
const mesCumple = cumple.getMonth() + 1; //IMPORTANTE, LOS MESES EN DATE VAN DE 0 A 11
const diaCumple = cumple.getDate();
console.log(`Dia: ${diaCumple} - Mes: ${mesCumple} - Año: ${anioCumple}`);

//OPERACIONES CON FECHAS
//Calcular cuántos días faltan para fin de año.
const hoy = new Date()
const finAnio = new Date(hoy.getFullYear(), 11, 31);
const diferencia = finAnio - hoy;
const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
console.log(`Faltan ${dias} días para fin de año`);

//Sumar dias a una fecha
const fecha = new Date();
fecha.setDate(fecha.getDate() + 10); //Sumar 10 dias a la fecha actual
console.log("Dentro de 10 días será:", fecha);

//FORMATEO Y COMPARACION
//Mostrar la fecha en formato DD/MM/YYYY.
hoy = new Date();
const formato = `${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`;
console.log(formato);

//Comparar fechas
const fecha1 = new Date(2025, 10, 15); //15 de octubre de 2025
const fecha2 = new Date(2025, 11, 25); //25 de noviembre de 2025
console.log(fecha1 < fecha2 ? "La primera es anterior" : "La segunda es anterior");

//RETOS AVANZADOS
//Calcular la edad de una persona
const fechaNacimiento = new Date(2001, 2, 17);
hoy = new Date();

let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
let mes = hoy.getMonth() - fechaNacimiento.getMonth();
if (mes < 0 || mes === 0 && hoy.getDate() < fechaNacimiento.getDate()) {
    edad--;
}
console.log(`Tienes ${edad} años`);

//Crear una función que diga si una fecha cae en fin de semana.
const finde = new Date();
function esFinde(fecha) {
    const dia = fecha.getDay();
    if (dia === 6 || dia === 0) {
        console.log(`El día ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} es fin de semana`);
    } else {
        console.log(`El día ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} NO es fin de semana`);
    }
}
esFinde(finde);

//Calcular la diferencia exacta entre dos fechas en días, horas y minutos.
function diferenciaFechas(fecha1, fecha2) {
    // Convertimos las fechas a milisegundos
    const ms1 = fecha1.getTime();
    const ms2 = fecha2.getTime();

    // Diferencia absoluta en milisegundos
    let diferencia = Math.abs(ms2 - ms1);

    // Cálculos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    diferencia -= dias * (1000 * 60 * 60 * 24);

    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    diferencia -= horas * (1000 * 60 * 60);

    const minutos = Math.floor(diferencia / (1000 * 60));

    return { dias, horas, minutos };
}

// Ejemplo de uso:
const fechaInicio = new Date(2025, 10, 15, 10, 30); // 15 Nov 2025, 10:30
const fechaFin = new Date(2025, 10, 18, 14, 45);   // 18 Nov 2025, 14:45

const resultado = diferenciaFechas(fechaInicio, fechaFin);
console.log(`La diferencia es de ${resultado.dias} días, ${resultado.horas} horas y ${resultado.minutos} minutos.`);

