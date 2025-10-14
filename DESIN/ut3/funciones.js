console.log("------Funcion nombrada------");
console.log(hello("Pedro (Antes de definirla)")); //Al ser una funcion nombrada se produce hoisting

function hello (nombre) {
    return "Hola " + nombre;
}

console.log(hello("Pepe (Después de definirla)"));

console.log("------Funcion que recibe una función------");
function hola(foo) {
    foo(); //Llamada a la función sin parámetros
}

hola(function() {
    console.log("Hola");
})

console.log("------Funcion que recibe una función 2------")
function hola2(foo) {
    foo("Pepe"); //Si no introduces parámetro, devuelve undefined al llamar a la función
}

hola2(function(nombre) {
    console.log("Hola " + nombre);
})




