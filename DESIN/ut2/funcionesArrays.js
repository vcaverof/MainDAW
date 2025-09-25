//shift, unshift, reverse

let array = [1,2,5,6,9,2,4];
let array2 = [7,5,8,2,1,3,9];


// Muestra la cantidad de elementos de un array
console.log("Prueba Length");
console.log(array.length);      //7

// Junta dos arrays y devuelve otro array con los elementos de ambos, primero de uno y despues de otro
console.log("Prueba Concat");
console.log(array.concat(array2));   //(14) [1, 2, 5, 6, 9, 2, 4, 7, 5, 8, 2, 1, 3, 9]

console.log("Prueba Join");
console.log(array.join(array2));    //17,5,8,2,1,3,927,5,8,2,1,3,957,5,8,2,1,3,967,5,8,2,1,3,997,5,8,2,1,3,927,5,8,2,1,3,94

//Extrae el último elemento del array
console.log("Prueba pop");
console.log(array.pop())      //4

//Introduce un elemento al final del array
console.log("Prueba Push");
array.push(7);
console.log(array);     //(7) [1, 2, 5, 6, 9, 2, 7]

//El sort se utiliza para ordenar un array
console.log("Prueba Sort Numeros");
let array3 = [20,1,2,10];
console.log(array3);   //(4) [20, 1, 2, 10]
console.log(array3.sort((a,b) => a - b));  //(4) [1, 2, 10, 20]

console.log("Prueba Sort Strings");
let array4 = ["rubio" , "moreno", "pelirrojo", "rubio", "moreno", "rubio", "moreno", "pelirrojo", "rubio"];
array4.sort(ordenar2);
console.log(array4);   // (9) ['pelirrojo', 'pelirrojo', 'moreno', 'moreno', 'moreno', 'rubio', 'rubio', 'rubio', 'rubio']

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

//indexOf (si no lo encuentra devuelve -1)
console.log("Prueba indexOf");
console.log(array.indexOf(2));  //1

//lastIndexOf (si no lo encuentra devuelve -1)
console.log("Prueba LastIndexOf");
console.log(array.lastIndexOf(2));  //5

//Slice extrae una porción del array desde "Inicio" hasta "Fin" indicado en el parentesis)
console.log("Prueba Slice");
console.log(array.slice(1,3)); //(2) [2, 5]

//Splice extrae una porción del array, elimina el número de elementos indicado y añade otros en su lugar en caso de indicarlo
console.log("Prueba Splice");
array.splice(1,3,7,5);
console.log(array);     //(6) [1, 7, 5, 9, 2, 7]


let a = [21, 23, 32];

//For in
console.log("Prueba For in");
for (i in a) {
    console.log(a[i]); //21, 23, 32
}


//For of
console.log("Prueba For of");
for (it of a) {
    console.log(it); //21, 23, 32
}






