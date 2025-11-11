function UsuarioPremium(nombre, id) {
    // Llamamos al constructor padre
    Usuario.call(this, nombre, id);
}

// Heredamos los métodos de Usuario
UsuarioPremium.prototype = Object.create(Usuario.prototype);
UsuarioPremium.prototype.constructor = UsuarioPremium;

// Sobrescribimos prestarLibro
UsuarioPremium.prototype.prestarLibro = function (libro) {
    if (libro.disponible && this.prestamos.length < 5) {
        Usuario.prototype.prestarLibro.call(this, libro); // reutilizamos lógica del padre
    } else {
        console.log('No se pudo prestar el libro "' + libro.titulo + '" a ' + this.nombre + " (Premium)");
    }
};
