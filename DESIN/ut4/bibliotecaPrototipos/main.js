function buscarPorAutor(libros, autor) {
    return libros.filter(function (libro) {
        return libro.autor === autor;
    });
}

function listarDisponibles(libros) {
    return libros.filter(function (libro) {
        return libro.disponible;
    });
}

var libro1 = new Libro("1984", "George Orwell", 1949);
var libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
var libro3 = new Libro("El Hobbit", "J.R.R. Tolkien", 1937);
var libro4 = new Libro("Fahrenheit 451", "Ray Bradbury", 1953);
var libro5 = new Libro("Don Quijote", "Miguel de Cervantes", 1605);

var biblioteca = [libro1, libro2, libro3, libro4, libro5];

var usuario1 = new Usuario("Ana", 1);
var usuario2 = new Usuario("Luis", 2);
var usuario3 = new UsuarioPremium("Carla", 3);

usuario1.prestarLibro(libro1);
usuario1.prestarLibro(libro2);
usuario2.prestarLibro(libro3);
usuario1.devolverLibro(libro1);

usuario3.prestarLibro(libro4);
usuario3.prestarLibro(libro5);

usuario1.mostrarPrestamos();
usuario2.mostrarPrestamos();
usuario3.mostrarPrestamos();

console.log("Libros de Orwell:");
buscarPorAutor(biblioteca, "George Orwell").forEach(function (libro) {
    console.log(libro.info());
});

console.log("Libros disponibles:");
listarDisponibles(biblioteca).forEach(function (libro) {
    console.log(libro.info());
});

