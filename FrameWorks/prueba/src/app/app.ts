import { Component } from '@angular/core';
import { Hijo } from './hijo/hijo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Hijo, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre: string = "";
  edad: number = 0;
  sexo: string = "";
  formularioRecibido: boolean = false;

  recibirDatos(datos: {nombre: string, edad: number, sexo: string}) {
    this.nombre = datos.nombre;
    this.edad = datos.edad;
    this.sexo = datos.sexo;
    this.formularioRecibido = true;
  }
}
