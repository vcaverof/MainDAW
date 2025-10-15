console.log("------FOREACH()------");
let array = [1, 2, 3, 4, 5];
array.forEach((e, i, a) => console.log("Valor: " + e, "Indice: " + i,"Array: " + a));
//Parámetros del ForEach (elemento, indice, array)
/*
Valor: 1 Indice: 0 Array: [1,2,3,4,5]
Valor: 2 Indice: 1 Array: [1,2,3,4,5]
Valor: 3 Indice: 2 Array: [1,2,3,4,5]
Valor: 4 Indice: 3 Array: [1,2,3,4,5]
Valor: 5 Indice: 4 Array: [1,2,3,4,5]
*/

console.log("------MAP------");
console.log(array);
let dobles = array.map(e => e * 2);
console.log(dobles);
//Parámetros del map (elemento, indice, mapa)


console.log("------REDUCE()------");
let total = array.reduce((a, b) => a + b);
console.log(total); //15
//Parámetros del reduce (accumulator, valorActual, index, array, [initial]) El valor por defecto del initial es 0

console.log("------REDUCE-RIGHT()------");
const sumWithInitial = array.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(sumWithInitial); //15

console.log("------FILTER()------");
let filtrado = array.filter(e => e % 2 == 0);
console.log(filtrado); //2, 4 (Solo devuelve los valores pares del array)

let filtrado2 = array.filter(e => e % 2 != 0);
console.log(filtrado2); //1, 3 , 5 (Solo devuelve los valores impares del array)

console.log("------EVERY()------");
let condicionEvery = array.every(e => e % 2 != 0);
console.log(condicionEvery); //false (No todos los componentes de array son impares)

console.log("------SOME()------");
let condicionSome = array.some(e => e % 2 != 0);
console.log(condicionSome); //True (Porque algun elemento del array si es impar)

console.log("------FIND()------");
let valorBuscado = array.find(e => e > 3);
console.log(valorBuscado); //4 (Devuelve el primer valor que encuentra, que cumple la condicion de busqueda)

let valorBuscado2 = array.find(e => e < 1)
console.log(valorBuscado2); //Undefined, porque no ha encontrado ningune elemento que cumpla la condicion de busqueda

console.log("------FINDE-INDEX()------");
let valorBuscadoIndex = array.findIndex(e => e > 2);
console.log(valorBuscadoIndex); //2 (Devuelve el índice del elemento encontrado que cumple la condicion de busqueda)

let valorBuscadoIndex2 = array.findLastIndex(e => e < 5);
console.log(valorBuscadoIndex2); //3 (Indice del ultimo elemento que ha encontrado que cumple la condicion de busqueda)


console.log("EJEMPLO REDUCE() CLASE");
const c = [10, 20, 30];
console.log(c.reduce(ac => {
    console.log(ac);
    return ac;
})); //10 Empieza directamente con el valor del indice 0 en el acumulador y comienza a iterar en el 1

console.log(c.reduce(ac => {
    console.log(ac);
    return ac;
}, 0)); //Devuelve siempre 0 

console.log(c.reduce((ac, n) => {
    console.log(ac);
    return ac + n;
}, 0)); //60

console.log(c.reduce((ac, n, i) => {
    console.log(i);
    return ac + n + i;
}, 0)); //63

console.log(c.reduce((ac, n, i, a) => {
    return ac + n + i + a[2];
})); //123 (Itera 2 veces)

console.log(c.reduce((ac, n, i, a) => {
    return ac + n + i + a[2];
}, 0)); //153 (Itera 3 veces)

console.log(c.reduce((ac, n) => ac + n, 100)); //160 La iteración comienza con el valor 100 en el acumulador

