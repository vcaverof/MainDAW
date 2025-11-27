import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  datos = "";

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit() {
    this.datos = `Nombre= ${this.formularioContacto.value.nombre}
                  Email= ${this.formularioContacto.value.email}
                  Mensaje= ${this.formularioContacto.value.mensaje}`;
  }
}

