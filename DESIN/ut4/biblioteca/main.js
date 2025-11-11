import { Libro } from "./Libro.js";
import { Usuario } from "./Usuario.js";
import { UsuarioPremium } from "./UsuarioPremium.js";

//Recibe un array de libros y un autor
let buscarPorAutor = (libros, autor) => {
    libros.filter(e => e.autor === autor)
    .forEach(libro => console.log(libro.info()));
};

//Recibe un array de libros
let listarDisponibles = (libros) => {
    libros.filter(e => e.disponible)
    .forEach(libro => console.log(libro.info()));
};
const libro1 = new Libro("1984", "George Orwell", 1949);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const libro3 = new Libro("El Hobbit", "J.R.R. Tolkien", 1937);
const libro4 = new Libro("Fahrenheit 451", "Ray Bradbury", 1953);
const libro5 = new Libro("Don Quijote", "Miguel de Cervantes", 1605);

let biblioteca = [libro1, libro2, libro3, libro4, libro5];

const usuario1 = new Usuario("Ana", 1);
const usuario2 = new Usuario("Luis", 2);
const usuario3 = new UsuarioPremium("Carla", 3);


usuario1.prestarLibro(libro1);
usuario1.prestarLibro(libro2);
usuario3.prestarLibro(libro3);
usuario1.devolverLibro(libro1);

console.log("--------------------");

usuario1.mostrarPrestamos();
usuario3.mostrarPrestamos();

console.log("--------------------");

buscarPorAutor(biblioteca, "George Orwell");

console.log("--------------------");

listarDisponibles(biblioteca);