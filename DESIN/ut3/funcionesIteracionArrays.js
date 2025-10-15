console.log("------FOREACH()------");
let array = [1, 2, 3, 4, 5];
array.forEach(e => console.log(e)); //1 2 3 4 5 

console.log("------MAP------");
console.log(array);
array.map(e => e + 1);
console.log(array);


console.log("------REDUCE()------");
let total = array.reduce(
    (a, b) => a + b,
);
console.log(total); //15

console.log("------REDUCE-RIGHT()------");
const sumWithInitial = array.reduceRight(
    (accumulator, currentValue) => accumulator + currentValue,
);

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