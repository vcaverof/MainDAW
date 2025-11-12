import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventiladores-component',
  imports: [CommonModule],
  templateUrl: './ventiladores-component.html',
  styleUrl: './ventiladores-component.css',
})
export class VentiladoresComponent {
  @Input() nombre: string = "";
  @Input() rango: {min: number, max: number} = {min: 0, max: 100};

  estado: string = "apagado";
  velocidad: number = 0;

  @Output() alerta = new EventEmitter<string>();

  encender() {
    this.estado = "encendido";
    this.velocidad = 0;

    const intervalo = setInterval(() => {
      if (this.estado !== "encendido") {
        clearInterval(intervalo);
        return;
      }

      this.velocidad++;

      if(this.verificarUmbral()) {
        this.bloquear();
        clearInterval(intervalo);
      }
    }, 1000);
  }

  apagar() {
    this.estado = "apagado";
    this.velocidad = 0;
  }

  bloquear() {
    this.estado = "bloqueado";
  }

  verificarUmbral() {
    if(this.velocidad > this.rango.max) {
      this.alerta.emit(`La luz ${this.nombre} ha superado el umbral de intensidad ${this.rango.max} con ${this.velocidad}`);
      this.bloquear();
      return true;
    }
    return false;
  }
}
