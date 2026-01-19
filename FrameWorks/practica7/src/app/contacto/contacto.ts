import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  datos = '';

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit() {
    this.datos = `Nombre: ${this.formularioContacto.value.nombre} -
    Email: ${this.formularioContacto.value.email}
    Mensaje: ${this.formularioContacto.value.mensaje}`;
  }
}
