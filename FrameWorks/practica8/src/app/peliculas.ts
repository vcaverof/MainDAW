import { Injectable } from '@angular/core';
import { Pelicula } from './models/pelicula.model';

@Injectable({
  providedIn: 'root',
})
export class Peliculas {

  private peliculas: Pelicula[] = [
    { id: 1, titulo: 'El Padrino', director: 'Francis Ford Coppola', anio: 1972, genero: 'Drama', disponible: true },
    { id: 2, titulo: 'Pulp Fiction', director: 'Quentin Tarantino', anio: 1994, genero: 'Accion', disponible: false },
    { id: 3, titulo: 'El Señor de los Anillos: La Comunidad del Anillo', director: 'Peter Jackson', anio: 2001, genero: 'Fantasia', disponible: true },
    { id: 4, titulo: 'Interstellar', director: 'Christopher Nolan', anio: 2014, genero: 'Ciencia-ficcion', disponible: true },
    { id: 5, titulo: 'La La Land', director: 'Damien Chazelle', anio: 2016, genero: 'Romantica', disponible: false },
    { id: 6, titulo: 'El Caballero Oscuro', director: 'Christopher Nolan', anio: 2008, genero: 'Accion', disponible: true },
    { id: 7, titulo: 'Parásitos', director: 'Bong Joon-ho', anio: 2019, genero: 'Thriller', disponible: true },
    { id: 8, titulo: 'Titanic', director: 'James Cameron', anio: 1997, genero: 'Romantica', disponible: false },
    { id: 9, titulo: 'Toy Story', director: 'John Lasseter', anio: 1995, genero: 'Comedia', disponible: true },
    { id: 10, titulo: 'El Exorcista', director: 'William Friedkin', anio: 1973, genero: 'Terror', disponible: true }
  ];

  getPeliculas() {
    return this.peliculas;
  }

  getPelicula(id: number) {
    return this.peliculas.find(p => p.id === id);
  }

  addPelicula(pelicula: Pelicula) {
    this.peliculas.push(pelicula);
  }


}
