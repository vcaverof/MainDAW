import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hijo} from './hijo/hijo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Hijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mensajeRecibido = '';

  mostrarMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
}
