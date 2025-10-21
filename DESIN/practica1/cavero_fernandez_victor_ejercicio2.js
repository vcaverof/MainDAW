let texto = "En un lugar de la mancha";

console.log("Función f4");
let f4 = texto => texto.split(" ")
    .join("");
   

console.log(f4(texto));

console.log("--------------------");
console.log("Funcion f5");
let f5 = texto => texto.split(" ")
    .reduce((acc, e) => acc + e.length, 0) / texto.split(" ").length;

console.log("Longitud media de las palabras: " + f5(texto));

console.log("--------------------");

console.log("Funcion f6");
let f6 = texto => texto.split(" ")
    .filter(e => e.includes("a"))
    .map(e => e.length);
console.log("Longitud de cada una de las palabras con la letra a: " + f6(texto));