//FUNDAMENTOS
//Función flecha que sume dos valores
const suma = (a, b) => a + b;
console.log(suma(4, 5)); //9


//Fundion flecha que devuelva un saludo
const saludar = (nombre) => `Hola, ${nombre}`;
console.log(saludar("Victor"));


//Funcion flecha sin parametros
const holaMundo = () => console.log("Hola mundo");
holaMundo();

//ARRAYS Y METODOS FUNCIONALES
//Usar map para duplicar numeros
const numeros = [1, 2, 3, 4];
const duplicar = (numeros) => numeros.map(e => e * 2);
console.log(duplicar(numeros)); // [2,4,6,8]

//Usar filter para quedarte con los pares
const pares = numeros.filter(e => e % 2 === 0);
console.log(pares); // [2,4]

//Usar reduce para sumar todos los elementos
const sumarTodos = numeros.reduce((acc, n) => acc + n, 0);
console.log(sumarTodos); //10

//CONTEXTOS MAS COMPLEJOS
//Diferencia entre funcion normal y funcion flecha con this
const persona = {
    nombre: "Victor",
    normal: function () { console.log(this.nombre) },
    flecha: () => console.log(this.nombre)
}

persona.normal();  // "Victor"
persona.flecha();  // undefined (porque `this` no se liga en flechas)

//Usar funciones flecha dentro de setTimeout
// setTimeout(() => console.log("Han pasado 2 segundos"), 2000);

//EJERCICIOS DE PRACTICA AVANZADA
//Dada una lista de nombres, obtener los que empiezan por 'A' y pasarlos a mayúsculas
const nombres = ["Ana", "Victor", "alba", "Luis"];
const resultado = (nombres) => nombres.filter(e => e.charAt(0) === 'a' || e.charAt(0) === 'A')
    .map(e => e.toUpperCase())
console.log(resultado(nombres));

//Crear una función flecha que reciba un array de numeros y devuelva el promedio
const promedio = (array) => array.reduce((acc, n) => (acc + n), 0) / array.length;
console.log(promedio([10, 20, 30])); //20

//Crear una función flecha que reciba un texto y devuelva un objeto con el conteo de cada letra
const texto = "hola me llamo Victor";

const f1 = (texto) => texto.split("")
    .reduce((acc, letra) => {
        // Si la letra ya existe en el objeto, sumamos 1
        if (acc[letra]) {
            acc[letra]++;
        } else {
            // Si no existe, la inicializamos en 1
            acc[letra] = 1;
        }
        return acc;  // devolvemos el acumulador
    }, {});  // inicializamos acc como objeto vacío

console.log(f1(texto));

//Usar funciones flecha para ordenar un array de objetos por edad.
const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 19 },
    { nombre: "Victor", edad: 25 },
    { nombre: "Alba", edad: 19 },
    { nombre: "Carlos", edad: 40 }
];

const ordenAsc = personas.sort((a, b) => a.edad - b.edad);
console.log(ordenAsc);

const ordenDesc = personas.sort((a, b) => b.edad - a.edad);
console.log(ordenDesc);

//Encadenar map, filter y reduce para resolver un problema real (ejemplo: calcular el gasto total de productos con precio > 20).
const productos = [
    { nombre: "Camiseta", precio: 15, cantidad: 2 },
    { nombre: "Pantalón", precio: 25, cantidad: 1 },
    { nombre: "Zapatos", precio: 50, cantidad: 1 },
    { nombre: "Gorra", precio: 10, cantidad: 3 },
    { nombre: "Chaqueta", precio: 60, cantidad: 1 }
];

const problema = productos
    .filter(e => e.precio > 20)         // Paso 1: quedarnos con los caros
    .map(e => e.precio * e.cantidad)    // Paso 2: calcular gasto por producto
    .reduce((acc, n) => acc + n, 0);    // Paso 3: sumar todo

console.log(problema);  // Resultado esperado: 135

//Calcular el gasto total por cada categoría
const productos2 = [
    { nombre: "Camiseta", categoria: "ropa", precio: 15, cantidad: 2 },
    { nombre: "Pantalón", categoria: "ropa", precio: 25, cantidad: 1 },
    { nombre: "Zapatos", categoria: "calzado", precio: 50, cantidad: 1 },
    { nombre: "Gorra", categoria: "accesorios", precio: 10, cantidad: 3 },
    { nombre: "Chaqueta", categoria: "ropa", precio: 60, cantidad: 1 }
];

const gastoTotal = productos2
    .reduce((acc, producto) => {
        const gasto = producto.precio * producto.cantidad;

        if (acc[producto.categoria]) {
            acc[producto.categoria] += gasto;
        } else {
            acc[producto.categoria] = gasto;
        }
        return acc;
    }, {});

console.log(gastoTotal);

//Obtener la suma de los cuadrados de los números pares.
const f16 = (numeros) => numeros
    .filter(e => e % 2 === 0)
    .map(e => e * e)
    .reduce((acc, n) => acc + n, 0);

console.log(f16([1, 2, 3, 4, 5, 6]))


//Encontrar todos los libros de un autor concreto y devolver solo los títulos en minúsculas.
const libros = [
    { titulo: "El Quijote", autor: "Cervantes" },
    { titulo: "La Galatea", autor: "Cervantes" },
    { titulo: "Hamlet", autor: "Shakespeare" },
    { titulo: "Macbeth", autor: "Shakespeare" }
];

const f17 = (libros, autor) => libros
    .filter(e => e.autor === autor)      // Filtramos por autor
    .map(e => e.titulo.toLowerCase());   // Convertimos solo el título a minúsculas

console.log(f17(libros, "Cervantes"));


//Recibe un string y devuelve un objeto con el número de veces que aparece cada palabra.
const contarPalabra = (texto) => texto
    .split(" ")
    .reduce((acc, palabra) => {
        if (acc[palabra]) {
            acc[palabra]++;
        } else {
            acc[palabra] = 1;
        }
        return acc;
    }, {});

console.log(contarPalabra("la palabra pepe aparece pepe tres pepe veces"));

//Ordenar un array de personas primero por edad ascendente y, si hay empate, por nombre alfabético.
const ordenarPersonas = (personas) => personas.sort((a, b) => {
    if (a.edad === b.edad) {
        return a.nombre.localeCompare(b.nombre);
    } else {
        return a.edad - b.edad;
    }
});

console.log(ordenarPersonas(personas));

//Dado un array de productos con precio y cantidad, devuelve un nuevo array con el precio total por producto.
productos = [
    { nombre: "Camiseta", precio: 15, cantidad: 2 },
    { nombre: "Pantalón", precio: 25, cantidad: 1 },
    { nombre: "Zapatos", precio: 50, cantidad: 1 },
    { nombre: "Gorra", precio: 10, cantidad: 3 },
    { nombre: "Chaqueta", precio: 60, cantidad: 1 }
];

const precioTotalporProducto = (productos) => productos
    .reduce((acc, producto) => {
        if (acc[producto.nombre]) {
            acc[producto.nombre] += producto.precio * producto.cantidad;
        } else {
            acc[producto.nombre] = producto.precio * producto.cantidad;
        }
        return acc;
    }, {});

console.log(precioTotalporProducto(productos));

//Dado un array de películas con titulo, genero y rating, devuelve un objeto con las películas agrupadas por género, pero solo las que tengan rating >= 8.
const peliculas = [
    { titulo: "Inception", genero: "Ciencia ficción", rating: 8.8 },
    { titulo: "The Dark Knight", genero: "Acción", rating: 9.0 },
    { titulo: "Interstellar", genero: "Aventura", rating: 8.6 },
    { titulo: "Parasite", genero: "Drama", rating: 8.6 },
    { titulo: "Parasite 2", genero: "Drama", rating: 8.9 },
    { titulo: "The Godfather", genero: "Crimen", rating: 9.2 }
];

const pelisRating = (peliculas) => peliculas
    .filter(pelicula => pelicula.rating > 8)
    .reduce((acc, pelicula) => {
        if (!acc[pelicula.genero]) {
            acc[pelicula.genero] = [];
        }
        acc[pelicula.genero].push(pelicula.titulo);
        return acc;
    }, {});

console.log(pelisRating(peliculas));

//Dado un array de números, devuelve la suma de los cubos de los números impares mayores que 5.
const sumaCubos = (numeros) => numeros
    .filter(numero => numero % 2 !== 0 && numero > 5)
    .map(numero => numero ** 3)
    .reduce((acc, numero) => acc + numero, 0);
console.log(sumaCubos([1, 2, 3, 4, 5, 7, 9])); // 7^3 + 9^3 = 343 + 729 = 1072

//Dado un array de usuarios con nombre y email, crea una función flecha que reciba un texto y devuelva todos los usuarios cuyo nombre contenga ese texto (case-insensitive).
const usuarios = [
    { nombre: "Victor", email: "victor@correo.com"},
    { nombre: "Pedro", email: "pedro@correo.com"},
    { nombre: "Laura", email: "laura@correo.com"},
    { nombre: "Alba", email: "valba@correo.com"},
    { nombre: "Eduardo", email: "eduardo@correo.com"},
    { nombre: "Misho", email: "misho@correo.com"},
];

const buscadorUsuarios = (texto) => usuarios
    .filter(e => e.nombre.toLowerCase().includes(texto.toLowerCase()))
console.log(buscadorUsuarios("ed"));