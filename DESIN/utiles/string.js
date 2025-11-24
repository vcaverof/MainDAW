//CREACIÓN Y PROPIEDADES
const str = "Hola Mundo";
str.length;          // 10

//ACCESO
str.charAt(0);       // "H"
str[1];              // "o"
str.charCodeAt(0);   // 72 (código Unicode)

//BÚSQUEDA
str.indexOf("Mundo");    // 5
str.lastIndexOf("o");    // 9
str.includes("Hola");    // true
str.startsWith("Hola");  // true
str.endsWith("Mundo");   // true

//EXTRACCIÓN
str.slice(0, 4);     // "Hola"
str.substring(5);    // "Mundo"
str.substr(5, 3);    // "Mun" (⚠️ obsoleto)


//TRANSFORMACIÓN
str.toUpperCase();   // "HOLA MUNDO"
str.toLowerCase();   // "hola mundo"
str.trim();          // elimina espacios al inicio/fin
str.repeat(3);       // "Hola MundoHola MundoHola Mundo"

//REEMPLAZO
str.replace("Mundo", "JS");   // "Hola JS"
str.replaceAll("o", "0");     // "H0la Mund0"

//DIVISIÓN Y UNIÓN
str.split(" ");      // ["Hola", "Mundo"]
["Hola", "Mundo"].join(" "); // "Hola Mundo"


//ITERACIÓN
for (let char of str) {
    console.log(char);
}
