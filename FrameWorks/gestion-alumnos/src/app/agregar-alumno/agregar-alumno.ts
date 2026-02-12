import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Alumno } from '../models/alumnos.model';
import { AlumnosService } from '../alumnos-service';

@Component({
  selector: 'app-agregar-alumno',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-alumno.html',
  styleUrl: './agregar-alumno.css',
})
export class AgregarAlumno {

  formulario!: FormGroup;
  alumno!: Alumno | undefined;
  AlumnoService: any;

  constructor(private fb: FormBuilder, private AlumnosService: AlumnosService) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(16), Validators.max(100)]],
      curso: ['', [Validators.required]],
      becado: ['no'],
      direccion: this.fb.group({
        calle: ['', [Validators.min(3)]],
        ciudad: [''],
      })
    });
  }

  enviar() {
    if (this.formulario.invalid) return;
    const nuevoAlumno: Alumno = this.formulario.value;

    this.AlumnosService.addAlumno(nuevoAlumno);

    alert('Se ha añadido el nuevo correctamente');

    this.formulario.reset();

  }
}
