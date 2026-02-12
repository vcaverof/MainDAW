import { Component } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';
import { PeliculasService } from '../peliculas-service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-listado-peliculas',
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './listado-peliculas.html',
  styleUrl: './listado-peliculas.css',
})
export class ListadoPeliculas {
  peliculas: Pelicula[] = [];

  constructor(private PeliculasService: PeliculasService) {

  }

  ngOnInit() {
    this.peliculas = this.PeliculasService.getPeliculas();
  }

  borrar(id: number) {
    this.PeliculasService.deletePelicula(id);
    this.peliculas = this.PeliculasService.getPeliculas();
  }
}
