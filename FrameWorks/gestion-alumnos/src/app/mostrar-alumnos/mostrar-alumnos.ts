import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AlumnosService } from '../alumnos-service';
import { Alumno } from '../models/alumnos.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-alumnos',
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './mostrar-alumnos.html',
  styleUrl: './mostrar-alumnos.css',
})
export class MostrarAlumnos {
  alumnos: Alumno[] = [];

  constructor(private AlumnosService: AlumnosService) {
    this.alumnos = this.AlumnosService.getAlumnos();
  }
}
