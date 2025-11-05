export class Biblioteca {
    #listaLibros;
    constructor(listaLibros) {
        this.#listaLibros = listaLibros;
    }

    buscarLibro(titulo) {
        for (let item of this.#listaLibros) {
            if (item.titulo === titulo) {
                return `Libro encontrado -> Titulo: ${item.titulo} - Autor: ${item.autor} - Año: ${item.año} - Disponible: ${item.disponible}`;
            }
        }

        return false;
    }

    listarLibros() {
        if (this.#listaLibros.length === 0) {
            return "No hay libros en la biblioteca.";
        }

        return this.#listaLibros.map(libro =>
            `📘 ${libro.titulo} - ${libro.autor} (${libro.año}) - Disponible: ${libro.disponible}`
        ).join("\n");
    }

    agregarLibro(libro) {
        this.#listaLibros.push(libro);
        return `Libro "${libro.titulo}" agregado.`;
    }

    eliminarLibro(titulo) {
        const index = this.#listaLibros.findIndex(libro => libro.titulo === titulo);
        if (index !== -1) {
            const eliminado = this.#listaLibros.splice(index, 1)[0];
            return `Libro "${eliminado.titulo}" eliminado.`;
        }
        return `No se encontró el libro "${titulo}".`;
    }
}