import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  actividad = new FormControl();
  lista: string[];
  constructor() {
    this.lista = [];
    let datos = localStorage.getItem('actividades');
    if (datos != null) {
      let array = JSON.parse(datos);
      if (array != null) {
        for (let actividad of array) {
          this.lista.push(actividad);
        }
      }
    } 
  }

  agregar() {
    this.lista.push(this.actividad.value);
    localStorage.setItem('actividades', JSON.stringify(this.lista));
    this.actividad.setValue('');
  }

  borrar(pos: number) {
    this.lista.splice(pos, 1);
    localStorage.clear();
    localStorage.setItem('actividades', JSON.stringify(this.lista));
  }

  borrarTodas() {
    localStorage.clear();
    this.lista = [];
  }
}
