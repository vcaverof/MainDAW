import { Component, QueryList, signal, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SensorTemperatura } from './sensor-temperatura/sensor-temperatura';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SensorTemperatura],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  sensores = [
    { nombre: 'Sensor 1', rango: { min: 0, max: 50 } },
    { nombre: 'Sensor 2', rango: { min: 10, max: 60 } },
    { nombre: 'Sensor 3', rango: { min: 5, max: 40 } },
  ];

  @ViewChildren(SensorTemperatura) sensoresRef!: QueryList<SensorTemperatura>;

  fijarTemperaturas() {
    this.sensoresRef.forEach((sensor, index) => {
      const valor = Math.floor(Math.random() * 100);
      sensor.fijar(valor);
    });
  }

  reiniciarTemperaturas() {
    this.sensoresRef.forEach(sensor => sensor.reset());
  }

  manejarAlerta(mensaje: string) {
    alert(mensaje);
  }
}