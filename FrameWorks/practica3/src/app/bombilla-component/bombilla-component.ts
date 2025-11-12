import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bombilla-component',
  imports: [CommonModule],
  templateUrl: './bombilla-component.html',
  styleUrl: './bombilla-component.css',
})
export class BombillaComponent {
  @Input() nombre: string = "";
  @Input() rango: { min: number, max: number } = { min: 0, max: 100 };

  @Output() alerta = new EventEmitter<string>();

  intensidad: number = 0;
  encendida: boolean = false;

  encender() {
    this.encendida = true;
    this.intensidad = 50; //Valor por defecto
    this.verificarIntensidad();
  }

  apagar() {
    this.encendida = false;
    this.intensidad = 0;
  }

  fijarIntensidad(valor: number) {
    this.intensidad = valor;
    this.encendida = valor > 0 ? true : false;
    this.verificarIntensidad();
  }

  verificarIntensidad() {
    if(this.intensidad > this.rango.max) {
      this.alerta.emit(`La bombilla ${this.nombre} ha sobrepasado el limite de intensidad ${this.intensidad}`);
    }
  }
}
