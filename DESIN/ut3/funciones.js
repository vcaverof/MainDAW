console.log("------Funcion nombrada------");
console.log(hello("Pedro (Llamada antes de definirla)")); //Al ser una funcion nombrada se produce hoisting

function hello (nombre) {
    return "Hola " + nombre;
}

console.log(hello("Pepe (Llamada después de definirla)"));


console.log("------Funcion asignada a una variable------");
// console.log(hello2("Pedro (Llamada antes de definirla)")); //Cannot access 'hello2' before initialization

let hello2 = function (nombre) {
    return "Hola " + nombre;
}

console.log(hello2("Pepe (Llamada después de definirla)")); //Hola Pepe


console.log("------Funcion que recibe una función------");
function hola(foo) {
    foo(); //Llamada a la función sin parámetros
}

hola(function() {
    console.log("Hola");
})


console.log("------Funcion que recibe una función con parámetros------");
function suma(foo) {
    foo (1,2); //3
}

suma(function (a,b){
    console.log(a+b);
});


console.log("------Parámetros------")
function f1(nombre, edad) {
    console.log(nombre + " - " + edad);
}

function f1(nombre, edad, direccion) {
    console.log(nombre + " - " + edad + " - " + direccion);
}

f1('Pepe'); //Pepe - undefined - undefined
f1('Pepe', 20); //Pepe - 20 - undefined
f1('Pepe', 20, "Calle X"); //Pepe - 20 - Calle X
//No se puede realizar sobrecarga de funciones. Hay que llamar diferente a cada función


console.log("------Parámetros con argument------")
function f2 (nombre, edad) {
    console.log(`${arguments[0]} - ${arguments[1]}`);
}
f2('Pepe'); //Pepe - undefined
f2('Pepe', 30, 'Otro dato'); //Pepe - 30


console.log("------Parámetros con valores por defecto------");
function f3 (nombre="Paco", edad = 20) {
    console.log(nombre + " - " + edad);
}
f3('Pepe');
f3();


console.log("------Funciones con parámetros 'rest'------");
function añadirApellido(nombre, ...apellidos) { //...apellidos recibe X número de parámetros y los agrupa en un array iterable
    let result = nombre;
    for(const i in apellidos) {
        result += " " + apellidos[i];
    }
    return result;
}

console.log(añadirApellido("Victor")); //Víctor
console.log(añadirApellido("Victor", "Cavero")); //Victor Cavero
console.log(añadirApellido("Victor", "Cavero", "Fernández")); //Victor Cavero Fernández

console.log("----------------------------");

let values= [1,2,3];
console.log(values); //[1, 2, 3]
let morevalues = [4, 5];
values.push(...morevalues);
console.log(values); //[1, 2, 3, 4, 5]

function suma (a, b, c) {
    return a + b + c;
}

let array1 = [1,2,3];
console.log(suma(...array1)); //6
let array2 = [1,2,3,4,5,6,7];
console.log(suma(...array2)); //6
//El resultado es el mismo, porque la funcion suma solo recoge los 3 primeros parámetros del array

let array3 = [1,2,3,4,5,6,7];
function add(...args) {
    result = 0;
    for (const i of args) {
        result += i;
    }
    return result;
}

console.log(add(...array3)); //28
//En este caso, al utilizar ...args en la funcion add, utiliza todos los parámetros recibidos para realizar el código de la función
//Si quitamos los puntos al ...array3, el resultado será erroneo porque considera el array un único parámetro
//Cuando utilizamos arguments[i], hacemos referencia a los parámetros de llamada de la función, no los de su cabecera


console.log("------Funciones flecha =>------");
let saludo = () => "Hola";
console.log(saludo()); //Hola

let saludo2 = nombre => "Hola " + nombre;
console.log(saludo2("Pepe")); //Hola Pepe

let saludo3 = (nombre, apellido) => {
    return "Hola " + nombre + " " + apellido;
}
console.log(saludo3("Pepe", "Ruiz")); //Hola Pepe Ruiz

//Cuando la funcion solo recibe un parámetro no es necesario utilizar paréntesis.
//Si la función solo tiene una línea de código no hay que utilizar el return
//La estructura de una función flecha es (parámetros) => código | {código}

console.log("-----------------");
let saludo4 = (nombre, apellido) => {
    console.log("Hola " + nombre + " " + apellido);
}

saludo4("Pepe", "Ruiz"); //Hola Pepe Ruiz

console.log("-----------------");
let saludo5 = (nombre, apellido) => console.log("Hola " + nombre + " " + apellido);

saludo5("Pepe", "Ruiz"); //Hola Pepe Ruiz

