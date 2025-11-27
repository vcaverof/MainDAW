import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre = "";
  email = "";
  biografia = "";
  genero = "";
  intereses = "";
  nivelAngular = "";

  formUsuario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    biografia: new FormControl(''),
    genero: new FormControl('femenino'),
    preferencias: new FormGroup({
      intereses: new FormControl('false'),
      nivelAngular: new FormControl('Basico'),
    })
  });

  submit() {
    if (this.formUsuario.value.nombre) {
      this.nombre = this.formUsuario.value.nombre;
    }

    if (this.formUsuario.value.email) {
      this.email = this.formUsuario.value.email;
    }

    if (this.formUsuario.value.biografia) {
      this.biografia = this.formUsuario.value.biografia;
    }

    if (this.formUsuario.value.genero == "masculino") {
      this.genero = "Masculino";
    } else if (this.formUsuario.value.genero == "femenino") {
      this.genero = "Femenino";
    } else {
      this.genero = "Otro";
    }

    if (this.formUsuario.value.preferencias?.intereses) {
      this.intereses = this.formUsuario.value.preferencias.intereses; //IMRIME TRUE, NO EL VALOR DE LOS CHECKBOX
    }

    if(this.formUsuario.value.preferencias?.nivelAngular) {
      this.nivelAngular = this.formUsuario.value.preferencias.nivelAngular.toString();
    }

  }
}
