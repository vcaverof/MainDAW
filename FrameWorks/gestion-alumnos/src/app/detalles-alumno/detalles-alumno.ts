import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumno } from '../models/alumnos.model';
import { AlumnosService } from '../alumnos-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalles-alumno',
  imports: [CommonModule],
  templateUrl: './detalles-alumno.html',
  styleUrl: './detalles-alumno.css',
})
export class DetallesAlumno {
  alumno: Alumno | undefined;

  constructor(private route: ActivatedRoute,private AlumnosService: AlumnosService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alumno = this.AlumnosService.getAlumno(id);
  }
}
