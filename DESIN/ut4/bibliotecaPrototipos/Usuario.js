function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
    this.prestamos = [];
}

Usuario.prototype.prestarLibro = function (libro) {
    if (libro.disponible && this.prestamos.length < 3) {
        libro.prestar();
        this.prestamos.push(libro);
        console.log('El libro "' + libro.titulo + '" ha sido prestado a ' + this.nombre);
    } else {
        console.log('No se pudo prestar el libro "' + libro.titulo + '" a ' + this.nombre);
    }
};

Usuario.prototype.devolverLibro = function (libro) {
    var index = this.prestamos.indexOf(libro);
    if (index !== -1) {
        libro.devolver();
        this.prestamos.splice(index, 1);
        console.log(this.nombre + ' devolvió el libro "' + libro.titulo + '"');
    }
};

Usuario.prototype.mostrarPrestamos = function () {
    console.log("Libros prestados por " + this.nombre + ":");
    if (this.prestamos.length === 0) {
        console.log("Ninguno");
    } else {
        this.prestamos.forEach(function (libro) {
            console.log(libro.info());
        });
    }
};
