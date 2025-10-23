const libro1 = { nombre: "Lagartijas", color: "Rojo", autor: "A.J. Perez", num_paginas: 50, editorial: "Analla", forrado: true, url_cover: "url_prueba" };
const libro2 = { nombre: "El Quijote", color: "Verde", autor: "Miguel de Cervantes", num_paginas: 500, editorial: "Editorial2", forrado: false, url_cover: "url_prueba2" };
const libro3 = { nombre: "La Celestina", color: "Azul", autor: "Unamuno", num_paginas: 600, editorial: "Editorial3", forrado: true, url_cover: "url_prueba3" };
const libro4 = { nombre: "Alicia en el Pais de las Maravillas", color: "Naranja", autor: "Autor4", num_paginas: 400, editorial: "Editorial4", forrado: false, url_cover: "url_prueba4" };

let biblioteca = [libro1, libro2, libro3];


//Mostrar la biblioteca
console.log("---------------Libros disponibles en la biblioteca---------------");
for (let libro of biblioteca) {
    console.log(toString(libro));

}
console.log("");

//Mostrar solo las editoriales de los libros
console.log("---------------Editoriales de los libros disponibles---------------");
for (let libro of biblioteca) {
    console.log(libro.editorial);

}
console.log("");

console.log("---------------Comprobar paginas del libro---------------")
let checkPages = libro => libro.num_paginas > 150 ? true : false;
console.log("¿Tiene mas de 150 páginas?: " + checkPages(libro1));
console.log("¿Tiene mas de 150 páginas?: " + checkPages(libro2));
console.log("");

console.log("---------------Comprobar disponibilidad de libro---------------");
let checkLibro = (biblioteca, libro) => biblioteca.includes(libro) ? true : false;
console.log("¿Disponible: " + checkLibro(biblioteca, libro1)); //Libro que SI está dentro del array biblioteca
console.log("¿Disponible: " + checkLibro(biblioteca, libro4)); //Libro que NO está dentro del array biblioteca
console.log("");

let librosLargos = [];
console.log("---------------Nueva lista de libros largos con más de 150 páginas---------------");
for (let libro of biblioteca) {
    if (checkPages(libro)) {
        librosLargos.push(libro);
    }
}

//Mostrarlos
for (let libro of librosLargos) {
    console.log(libro);
}
console.log("");

console.log("---------------Comprobar autor---------------");
let checkAutor = (biblioteca, autor) => biblioteca.forEach(e => e.autor === autor ? console.log(toString(e)) : null);
console.log(checkAutor(biblioteca, "Miguel de Cervantes"));
console.log("");


console.log("----------FORRAR LIBRO----------");
let forrarLibro = biblioteca => biblioteca.map(e => e.forrado = true);
forrarLibro(biblioteca);

//Mostrar la biblioteca con los libros forrados
console.log("Libros disponibles en la biblioteca tras el forrado: ");
for (let libro of biblioteca) {
    console.log(toString(libro));

}
console.log("");

console.log("----------PRESTAR LIBRO----------");
function prestarLibro(biblioteca, titulo) {
    for (let libro of biblioteca) {
       
    }
}

prestarLibro(biblioteca, "El Quijote");

console.log("");

function devolverLIbro(biblioteca, libroDevuelto) {
    for (let libro of biblioteca) {
        if (libro === libroDevuelto) {
            console.log("El libro ya se encuentra en la biblioteca");
        } else {
            biblioteca.push(libroDevuelto);
        }
    }
}


//Funcion que te devuelve información del autor cuando se compra le libro
function comprar(libro) {
    console.log(`Libro de aventuras del autor ${libro.autor} comprado`);
}
comprar(libro1);

//Devuelve datos del libro
function toString(libro) {
    return libro.nombre + "-" + libro.autor + "(" + libro.num_paginas + ")" + "**" + libro.forrado;
}
