let mapa = new Map();

//-------SET--------
mapa.set(1, "Pedro");
mapa.set(2, "María");
mapa.set(3, "Manuel");
mapa.set(4, "David");

//-------GET--------
console.log(mapa.get(1)); //Pedro

//-------SIZE--------
console.log(mapa.size); //4

//-------DELETE--------
mapa.delete(2); //Borra un valor asociado a una clave
console.log(mapa.entries()); //{1 => Pedro, 3 => Manuel, 4 => David}

//-------HAS--------
console.log(mapa.has(2)); //False

//-------CLAVES Y VALORES--------
console.log(mapa.values()); // {Pedro, Manuel, David}
console.log(mapa.keys()); // {1, 3, 4}
console.log(mapa.entries()); //{1 => Pedro, 3 => Manuel, 4 => David}

console.log("------FOR [CLAVE, VALOR]--------");
for (var [clave, valor] of mapa) {
    console.log (clave + " = " + valor);
} 

let valores = mapa.values();
let claves = mapa.keys();
console.log(valores);

// for (let i = 0; i < mapa.size; i++) {
//     console.log(claves[i] + " => " + valores[i]);
// } No funciona

console.log("----FOR CLAVES----");
for (key of mapa.keys()) {  //Accede a las claves de forma aislada
    console.log(key);
}

console.log("----FOR VALORES----");
for (value of mapa.values()) { //Accede a los valores de forma aislada
    console.log(value);
}

console.log("----FOR ENTRADAS----");
for (entradas of mapa.entries()) { //Accede a los valores y las claves de forma conjunta
    console.log(entradas);
}

console.log("----FOR MAPA----");
for (elemento of mapa) {
    // console.log(elemento); Si funciona
    // console.log(elemento.get(3)); Error
    console.log("Elemento[]: " + elemento[0]); //0 es la clave y 1 es el valor
}

console.log("-----FOR EACH-----");
let texto = "";
mapa.forEach(function(clave, valor) {
    texto += clave + ' => ' + valor + "\n";
});

console.log(texto);

mapa.clear(); //Elimina todos los valores del mapa








