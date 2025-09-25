// //shift, unshift, reverse, sort, indexOf, lastIndexOf, slice, splice

// let array = [1,3,5,6,9,2,4];
// let array2 = [7,5,8,2,1,3,9];


// // // Muestra la cantidad de elementos de un array
// console.log("Prueba Length");
// console.log(array.length);

// // Junta dos arrays y devuelve otro array con los elementos de ambos, primero de uno y despues de otro
// console.log("Prueba Concat");
// console.log(array.concat(array2));

// console.log("Prueba Join");
// console.log(array.join(array2));

// //Extrae el último elemento del array
// console.log("Prueba pop");
// console.log(array.pop())

// //Introduce un elemento al final del array
// console.log("Prueba Push");
// array.push(7);
// console.log(array); //[1, 3, 5, 6, 9, 2, 4, 7]


//El sort se utiliza para ordenar un array
console.log("Prueba Sort Numeros");
let array3 = [20,1,2,10];
console.log(array3);
console.log(array3.sort((a,b) => a - b));

console.log("Prueba Sort Strings");
let array4 = ["rubio" , "moreno", "pelirrojo", "rubio", "moreno", "rubio", "moreno", "pelirrojo", "rubio"];
array4.sort(ordenar2);
console.log(array4);

function ordenar(a,b) {
    arrayOrd = ["pelirrojo", "moreno", "rubio"];
    if (arrayOrd.indexOf(a) > arrayOrd.indexOf(b)){
        return 1;
    } else {
        return -1;
    }
    return 0;
}

function ordenar2(a,b) {
    let pelirrojo = 1;
    let moreno = 2;
    let rubio = 3;

    if (a == "pelirrojo") {
        a = pelirrojo;
    } else if (a == "moreno") {
        a = moreno;
    } else {
        a = rubio;
    } 
    
    if (b == "pelirrojo") {
        b = pelirrojo;
    }else if (b == "moreno") {
        b = moreno;
    } else {
        b = rubio;
    }

    return a - b;
}






