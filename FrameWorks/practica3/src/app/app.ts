import { Component, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SensorTemperatura } from './sensor-temperatura/sensor-temperatura';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SensorTemperatura],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  sensores = [
    { nombre: 'Sensor 1', rango: { min: 0, max: 50 } },
    { nombre: 'Sensor 2', rango: { min: 10, max: 60 } },
    { nombre: 'Sensor 3', rango: { min: 5, max: 40 } },
  ];

  @ViewChildren(SensorTemperatura) sensoresView!: QueryList<SensorTemperatura>;

  reiniciarTodo() {
    this.sensoresView.forEach(sensor => sensor.reset());
  }

  fijarTodo(valor: number) {
    this.sensoresView.forEach(sensor => sensor.fijar(valor));
  }

  manejarAlerta(mensaje: string) {
    alert(mensaje);
  }
}