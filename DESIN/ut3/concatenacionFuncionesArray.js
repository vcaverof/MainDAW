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
//Una funcion 'f1' que devuelva un array con los números que sean el resultado de multiplicar
//cada elemento por 3, filtrando los resultantes no divisibles por 4

let array = [1, 2, 3, 4];

let f1 = (array) => a.map(e => e * 3)
    .filter(e => e % 4 === 0);
console.log(a); //[12]

//Una funcion f2 que visualice en consola los elementos que no sean divisibles por 2
//Uns funcion f3 que devuelva la suma de todos los elementos que etén en una posición par
