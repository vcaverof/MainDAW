import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sensor-temperatura',
  imports: [],
  templateUrl: './sensor-temperatura.html',
  styleUrl: './sensor-temperatura.css'
})
export class SensorTemperatura {
  @Input() nombre: string = "";
  @Input() umbral: {min: number, max: number} = {min: 0, max: 100};
  @Output() alerta = new EventEmitter<string>();

  temperaturaActual: number = 0;

  fijar(valor: number) {
    this.temperaturaActual = valor;
    if (valor > this.umbral.max) {
      this.alerta.emit(`${this.nombre} superó el umbral de ${this.umbral.max}ºC`);
    }
  }

  reset(){
    this.temperaturaActual = 10;
  }
}
