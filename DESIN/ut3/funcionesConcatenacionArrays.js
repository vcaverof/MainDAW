let frase = "no luce la luna sin traérmela en sueños";

let res1 = frase.split(" ")
    .filter(e => e.charAt(0).toLowerCase() === 'l')
    .map(e => e.toUpperCase());
console.log(res1); //['LUCE', 'LA', 'LUNA']


/*
Primero haces un split para separar las palabras en un array, luego con filter, comparas la primera letra de cada
palabra para comprobar la condicion, y finalmente haces un map para poner en mayúsculas cada palabra que cumple la condición
del filter.
*/

let res2 = frase.split(" ")
    .filter(e => e.length < 3)
    .join("")
    .length;

console.log(res2);

//Escribir las siguientes funciones que admitan el array a = [1,2,3,4] como parámetro
let a = [1, 2, 3, 4];

//Una funcion 'f1' que devuelva un array con los números que sean el resultado de multiplicar cada elemento por 3, filtrando los resultantes no divisibles por 4
console.log("------EJERCICIO 1------");
let f1 = array => array.map(e => e * 3)
    .filter(e => e % 4 === 0);
console.log(f1(a));

//Una funcion f2 que visualice en consola los elementos que no sean divisibles por 2
console.log("------EJERCICIO 2------");
let f2 = array => array.filter(e => e % 2 !== 0)
    .forEach(e => console.log(e));
f2(a); //[1, 3]

//Una funcion f3 que devuelva la suma de todos los elementos que estén en una posición par
console.log("------EJERCICIO 3------");
let f3 = array => array.filter((e, i) => i % 2 == 0)
    .reduce((acc, e) => acc + e, 0); //El cero es para evitar errores en caso de que el array esté vacio
console.log(f3(a)); //4 (1 + 3)



