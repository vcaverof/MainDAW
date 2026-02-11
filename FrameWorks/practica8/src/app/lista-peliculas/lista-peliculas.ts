import { Component } from '@angular/core';
import { Peliculas } from '../peliculas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-peliculas',
  imports: [CommonModule],
  templateUrl: './lista-peliculas.html',
  styleUrl: './lista-peliculas.css',
})
export class ListaPeliculas {
  peliculas: any[] = [];

  constructor(private peliculasService: Peliculas) {
  }

  ngOnInit() {
    this.peliculas = this.peliculasService.getPeliculas();
  }

}
