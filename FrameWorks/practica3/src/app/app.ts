import { Component, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SensorTemperatura } from "./sensor-temperatura/sensor-temperatura";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SensorTemperatura],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   sensores = [
    { nombre: 'Sensor A', rango: { min: 0, max: 50 } },
    { nombre: 'Sensor B', rango: { min: 10, max: 60 } },
    { nombre: 'Sensor C', rango: { min: 5, max: 40 } }
  ];

  @ViewChildren(SensorTemperatura) sensoresRefs!: QueryList<SensorTemperatura>;

   reiniciarTodo() {
    this.sensoresRefs.forEach(sensor => sensor.reset());
  }

  fijarTodo(valor: number) {
    this.sensoresRefs.forEach(sensor => sensor.fijar(valor));
  }

  manejarAlerta(mensaje: string) {
    alert(mensaje);
  }
}