//new Date(), crea un objeto con la fecha y hora actuales del sistema
console.log("new Date()");
fecha = new Date();
console.log(fecha);
console.log("-----------------------")

//new Date(milisegundos) crea un objeto con la fecha y hora actuales del sistema utilizando milisegundos
console.log("new Date(milisegundos)");
fecha2 = new Date();
console.log(fecha2);
console.log("-----------------------")

//new Date(cadenaFecha) crea un objeto con la fecha y hora actuales, utilizando un string tipo "aaaa-mm-dd"
console.log("new Date(cadenaFecha");
fecha3 = new Date('2015-03-17');
console.log(fecha3);
console.log("-----------------------")

//now() devuelve el valor numérico correspondiente a la fecha y hora actual
console.log("now()");
console.log(Date.now());
console.log("-----------------------")

//parse()
console.log("parse()");
let fecha4 = Date.parse('2019-03-17');
console.log(fecha4);
console.log("-----------------------")

//getFullYear()
console.log("getFullYear()");
console.log(fecha.getFullYear()); //Año que sea
console.log("-----------------------")

//getMonth()
console.log("getMonth()");
console.log(fecha.getMonth()); //El mes del año que sea
console.log("-----------------------")

//getDate()
console.log("getDate()");
console.log(fecha.getDate()); //El día del mes que sea
console.log("-----------------------")

//getDay()
console.log("getDay()");
console.log(fecha.getDay()); //Día de la semana que sea (Domingo = 0, Lunes = 1.... Sábado = 6)
console.log("-----------------------")

//getHours, getMinutes, getSeconds, getMilliseconds()
console.log("getHours()");
console.log(fecha.getHours()); //Horas, minutos, segundos o milisegundos que sea
console.log("-----------------------")

//getTime()
console.log("getTime()");
console.log(fecha.getTime()); //Valor numérico en milisegundos que sea
console.log("-----------------------")

