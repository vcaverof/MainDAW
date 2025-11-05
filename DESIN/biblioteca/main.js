import { Libro } from "./Libro.js";
import { Administrador } from "./Administrador.js";
import { Biblioteca } from "./Biblioteca.js";

// Crear libros
const libro1 = new Libro("1984", "George Orwell", 1949);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
const libro3 = new Libro("El Principito", "Antoine de Saint-Exupéry", 1943);

// Crear biblioteca con libros iniciales
const biblioteca = new Biblioteca([libro1, libro2]);

// Crear administrador que gestiona esa biblioteca
const admin = new Administrador("Laura", biblioteca);

// Saludo del administrador
console.log(admin.saludar());

// Listar libros actuales
console.log("📚 Libros actuales:");
console.log(biblioteca.listarLibros());

// Buscar un libro
console.log("🔍 Buscar '1984':");
console.log(biblioteca.buscarLibro("1984"));

// Agregar un nuevo libro
console.log("➕ Agregar 'El Principito':");
console.log(admin.agregarLibro(libro3));

// Eliminar un libro
console.log("🗑 Eliminar 'Cien años de soledad':");
console.log(admin.eliminarLibro("Cien años de soledad"));

// Listar libros después de cambios
console.log("📚 Libros después de cambios:");
console.log(biblioteca.listarLibros());

// Probar método estático de comparación
console.log("📊 Comparar años de publicación:");
console.log(Libro.compararPorAño(libro1, libro3));

// Probar préstamo y devolución
console.log("📕 Estado de '1984' antes del préstamo:", libro1.disponible);
libro1.prestar();
console.log("📕 Estado de '1984' después del préstamo:", libro1.disponible);
libro1.devolver();
console.log("📕 Estado de '1984' después de la devolución:", libro1.disponible);
