import { Component, QueryList, signal, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PuertaComponent } from './puerta-component/puerta-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PuertaComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  puertas = [
    {nombre: "puerta1", rango: {min: 0, max: 15}},
    {nombre: "puerta2", rango: {min: 10, max: 50}},
    {nombre: "puerta3", rango: {min: 80, max: 300}},
  ];

  @ViewChildren (PuertaComponent) puertaView!: QueryList<PuertaComponent>;

  abrirTodas() {
    this.puertaView.forEach(puerta => puerta.abrir());
  }

  cerrarTodas() {
    this.puertaView.forEach(puerta => puerta.cerrar());
  }

  bloquearTodas() {
    this.puertaView.forEach(puerta => puerta.bloquear());
  }


  manejarAlerta(mensaje: string) {
    alert(mensaje);
  }
}
