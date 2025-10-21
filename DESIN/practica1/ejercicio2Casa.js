let texto = "En un lugar de la mancha";


let f4 = texto => texto.toLowerCase() //en un lugar de la mancha
    .split(" ")                      //["en", "un", "lugar", "de", "la", "mancha"]
    .map((e, i) => i === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1))
    .join("");   
    
console.log(f4(texto));


let f5 = texto => texto.split(" ")
    .join("")
    .length / texto.split(" ").length;

console.log(f5(texto));

let f6 = texto => texto.split(" ")
    .filter(e => e.includes("a"))
    .map(e => e.length);
console.log(f6(texto));