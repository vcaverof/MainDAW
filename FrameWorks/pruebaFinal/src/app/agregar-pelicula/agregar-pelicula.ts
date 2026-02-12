import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../models/pelicula.model';
import { PeliculasService } from '../peliculas-service';

@Component({
  selector: 'app-agregar-pelicula',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-pelicula.html',
  styleUrl: './agregar-pelicula.css',
})
export class AgregarPelicula {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private peliculasService: PeliculasService) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      director: ['', [Validators.required]],
      anio: ['', [Validators.required, Validators.min(1900)]],
      genero: ['', [Validators.required]],
      disponible: [false],
    });
  }

  enviar() {
    if (this.formulario.invalid) return;

    const nuevaPelicula: Pelicula = this.formulario.value;

    this.peliculasService.addPelicula(nuevaPelicula);

    alert('Se ha añadido la película correctamente');

    this.formulario.reset();
  }
}
