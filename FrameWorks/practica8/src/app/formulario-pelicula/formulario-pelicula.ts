import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Peliculas } from '../peliculas';
import { Pelicula } from '../models/pelicula.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pelicula',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-pelicula.html',
  styleUrl: './formulario-pelicula.css',
})
export class FormularioPelicula {

  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private peliculasService: Peliculas) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      director: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      anio: ['', [Validators.min(0)]],
      genero: ['', [Validators.required]],
      disponible: [false]
    });
  }

  enviar() {
    if(this.formulario.invalid) return;

    const nuevaPelicula: Pelicula = this.formulario.value;

    this.peliculasService.addPelicula(nuevaPelicula);

    alert('Se ha añadido la película correctamente');

    this.formulario.reset();
  }



}
