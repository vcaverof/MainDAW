let palabra = "Pepe";
let frase = "Hola Buenas Tardes";

console.log("EJEMPLO 1 = " + palabra);
console.log("EJEMPLO 2 = " + frase);
console.log("--------------------");

//LENGTH
console.log("Length");
console.log(palabra.length); //4
console.log(frase.length); //18
console.log("--------------------");


//Concat
console.log("Concat");
let conc = frase + " " + palabra; //Introducimos un espacio entre medias para separar las dos cadenas
console.log(conc); //Hola Buenas Tardes Pepe
console.log("--------------------");


//CharAt(pos)
console.log("CharAt");
let caracterPos = frase.charAt(13);
console.log(caracterPos); //a
console.log("--------------------");

//charCodeAt(p)
console.log("CharCodeAt");
let caracterCode = frase.charCodeAt(4);
console.log(caracterCode); //32 (valor UNICODE de a)
console.log("--------------------");

//indexOf(sub)
console.log("indexOf");
let subIndex = frase.indexOf("uenas");
console.log(subIndex);  //6 (es decir, la posición del primer caracter de la subcadena introducida)
console.log("--------------------");

//lasIndexOf(Sub)
// console.log("lastIndexOf")
// let subLastIndex = frase.lastIndexOf("uenas");
// console.log(subLastIndex); 
// console.log("--------------------");

//substr(i,f)
console.log("Substring(i,f)");
let subcadena = frase.substring(5,11);
console.log(subcadena); //Buenas
console.log("--------------------");

//toLowerCase()
console.log("toLoweCase()");
console.log(frase.toLowerCase());  //hola buenas tardes
console.log("--------------------");

//toUpperCase()
console.log("toUpperCase()");
console.log(frase.toUpperCase());  //HOLA BUENAS TARDES
console.log("--------------------");

//split(c)
console.log("Split(c)");
let nuevaFrase = frase.split(" "); //Utiliza el espacio como separador
console.log(nuevaFrase); //(3) ['Hola', 'Buenas', 'Tardes']
console.log("--------------------");

//endsWith() comprueba el String indicado termina en la subcadena pasada como parámetro
console.log("endsWith()");
console.log(frase.endsWith("des")); //true
console.log("--------------------");

//startsWith() funciona igual pero con el inicio
console.log("startsWith()");
console.log(frase.startsWith("Bue")); //false
console.log("--------------------");

//includes() comprueba si un String contiene a otro
console.log("includes()");
console.log(frase.includes("Buenas")); //true
console.log("--------------------");

//match() Devuelve un array con las ocurrencias
console.log("match()");
console.log(frase.match("rdes"));
console.log("--------------------");

//repeat() repite un string un numero de veces concreto
console.log("repeat()");
console.log(palabra.repeat(5));
console.log("--------------------");

//trim() elimina los espacios en blanco (muy útil)
console.log("trim()");
let sinEspacios = frase.trim();
console.log(sinEspacios);
console.log("--------------------");

//padEnd() se encarga de añadir espacios/caracteres al final (Cuentan los caracteres que ocupa la palabra)
console.log("padEnd()");
console.log(palabra.padEnd(5, ".")); //Pepe.
console.log("--------------------");






