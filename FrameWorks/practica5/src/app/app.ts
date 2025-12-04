import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre = "";
  email = "";
  biografia = "";
  genero = "";
  intereses: string[] = [];
  nivelAngular = "";

  opcionesIntereses = ["Música", "Deportes", "Videojuegos", "Lectura"];
  usuariosRegistrados: any[] = [];

  formUsuario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    biografia: new FormControl(''),
    genero: new FormControl('femenino'),
    preferencias: new FormGroup({
      musica: new FormControl(false),
      deportes: new FormControl(false),
      videojuegos: new FormControl(false),
      lectura: new FormControl(false),
      nivelAngular: new FormControl('Basico'),
    })
  });

  constructor() {
    const data = localStorage.getItem("usuarios");
    if (data) {
      this.usuariosRegistrados = JSON.parse(data);
    }
  }

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


    // Recoger intereses seleccionados
    const intereses: any[] = [];
    if (this.formUsuario.value.preferencias?.musica) intereses.push("Música");
    if (this.formUsuario.value.preferencias?.deportes) intereses.push("Deportes");
    if (this.formUsuario.value.preferencias?.videojuegos) intereses.push("Videojuegos");
    if (this.formUsuario.value.preferencias?.lectura) intereses.push("Lectura");

    this.intereses = intereses;

    if (this.formUsuario.value.preferencias?.nivelAngular) {
      this.nivelAngular = this.formUsuario.value.preferencias.nivelAngular.toString();
    }
    const nuevoUsuario = {
      nombre: this.formUsuario.value.nombre,
      email: this.formUsuario.value.email,
      biografia: this.formUsuario.value.biografia,
      genero: this.formUsuario.value.genero,
      intereses: intereses,
      nivelAngular: this.formUsuario.value.preferencias?.nivelAngular,
    };

    // Guardar en array y en localStorage
    this.usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuariosRegistrados));

    // Resetear formulario
    this.formUsuario.reset({
      genero: 'femenino',
      preferencias: {
        musica: false,
        deportes: false,
        videojuegos: false,
        lectura: false,
        nivelAngular: 'Basico'
      }
    });
  }

  borrarUsuarios() {
    this.usuariosRegistrados = [];
    localStorage.removeItem('usuarios'); // elimina la clave completa
  }

}
