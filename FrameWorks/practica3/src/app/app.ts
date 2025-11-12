import { Component, QueryList, signal, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BombillaComponent } from './bombilla-component/bombilla-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BombillaComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  bombillas = [
    { nombre: "bombilla1", rango: { min: 0, max: 100 } },
    { nombre: "bombilla2", rango: { min: 25, max: 70 } },
    { nombre: "bombilla3", rango: { min: 10, max: 35 } },
  ];

  @ViewChildren(BombillaComponent) bombillasView!: QueryList<BombillaComponent>;

  encenderTodas() {
    this.bombillasView!.forEach(bombilla => bombilla.encender());
  }

  apagarTodas() {
    this.bombillasView!.forEach(bombilla => bombilla.apagar());
  }

  fijarTodas(valor: number) {
    this.bombillasView!.forEach(bombilla => bombilla.fijarIntensidad(valor));
  }

  manejarAlerta(mensaje: string) {
    alert(mensaje);
  }
}
