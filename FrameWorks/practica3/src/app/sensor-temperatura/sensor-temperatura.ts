import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sensor-temperatura',
  standalone: true,
  templateUrl: './sensor-temperatura.html',
})
export class SensorTemperatura {
  @Input() nombre: string = '';
  @Input() rango: { min: number; max: number } = { min: 0, max: 100 };
  @Output() alerta = new EventEmitter<string>();

  temperatura: number = 0;

  fijar(valor: number) {
    this.temperatura = valor;
    if (valor > this.rango.max) {
      this.alerta.emit(`${this.nombre} superó el umbral de temperatura`);
    }
  }

  reset() {
    this.temperatura = 0;
  }
}
