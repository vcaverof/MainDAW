function Libro(titulo, autor, anioPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.anioPublicacion = anioPublicacion;
    this.disponible = true;
}

Libro.prototype.info = function () {
    var estado = this.disponible ? "Disponible" : "Prestado";
    return "Título: " + this.titulo + " - Autor: " + this.autor +
        " - Año: " + this.anioPublicacion + " - Estado: " + estado;
};

Libro.prototype.prestar = function () {
    if (this.disponible) {
        this.disponible = false;
        console.log('El libro "' + this.titulo + '" ha sido prestado');
    } else {
        console.log('El libro "' + this.titulo + '" no está disponible');
    }
};

Libro.prototype.devolver = function () {
    this.disponible = true;
    console.log('El libro "' + this.titulo + '" ha sido devuelto');
};
