import { Usuario } from "./Usuario.js";

export class UsuarioPremium extends Usuario{
    constructor(nombre, age) {
        super(nombre, age);
    }

    prestarLibro(libro) {
        if (libro.disponible === true && this.prestamos.length < 5) {
            super.prestarLibro(libro);
        } else {
            console.log(`El libro ${libro.titulo} no está disponible`);
        }
    }
}