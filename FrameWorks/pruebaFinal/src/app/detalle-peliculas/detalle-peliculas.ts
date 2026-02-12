import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../models/pelicula.model';
import { PeliculasService } from '../peliculas-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detalle-peliculas',
  imports: [CommonModule],
  templateUrl: './detalle-peliculas.html',
  styleUrl: './detalle-peliculas.css',
})
export class DetallePeliculas {

  id!: string | null;
  pelicula!: Pelicula | undefined;

  constructor(private route: ActivatedRoute, private PeliculasService: PeliculasService) {

  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.pelicula = this.PeliculasService.getPelicula(Number(this.id));
  }
}
