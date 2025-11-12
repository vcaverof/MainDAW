import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calefactores-component',
  imports: [CommonModule],
  templateUrl: './calefactores-component.html',
  styleUrl: './calefactores-component.css',
})
export class CalefactoresComponent {
  @Input() nombre: string = "";
  @Input() rango: {min: number, max: number} = {min: 0, max: 100};

  @Output() alerta = new EventEmitter<string>();

  estado: string = "apagado";
  temperatura: number = 0;

  encender() {
    this.estado = "encendido";
    this.temperatura = 0;

    const intervalo = setInterval(() => {
      if (this.estado !== "encendido") {
        clearInterval(intervalo);
        return;
      }

      this.temperatura++;
      
      if(this.verificarUmbral()) {
        this.bloquear();
        clearInterval(intervalo);
      }

    }, 1000);
  }

  apagar() {
    this.estado = "apagado";
    this.temperatura = 0;
  }

  bloquear() {
    this.estado = "bloqueado";
  }

  verificarUmbral() {
    if (this.temperatura > this.rango.max) {
      this.alerta.emit(`El calefactor ${this.nombre} ha superado el umbral de temperatura ${this.rango.max} con ${this.temperatura}`);
      this.bloquear();
      return true;
    }
    return false;
  }
}

