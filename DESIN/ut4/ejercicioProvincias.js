let array = [
    { clave: "Castilla y León", valor: ["Valladolid", "Burgos", "León", "Palencia", "Salamanca", "Segovia"] },
    { clave: "Valencia", valor: ["Valencia", "Alicante", "Castellón"] },
    { clave: "Andalucia", valor: ["Sevilla", "Cordoba", "Almeria", "Jaén", "Cádiz"] }
];

//Primer recorrido
for (let item of array) {
    console.log(`${item.clave}: ${(item.valor).join(" ")}`);
}

console.log('---------------------------------');

//Segundo recorrido
let f1 = (item) => item.map(e => e.toUpperCase())
    .filter(e => e.charAt(0) === "V" || e.charAt(0) === "C")
    .map(e => e.charAt(0) + e.substring(1, e.length).toLowerCase())
    .sort()
    .join(" ");

for (let item of array) {
    console.log(`${item.clave}: ${f1(item.valor)}`);
}


