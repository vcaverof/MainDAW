import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-luces-component',
  imports: [CommonModule],
  templateUrl: './luces-component.html',
  styleUrl: './luces-component.css',
})
export class LucesComponent {
  @Input() nombre: string = "";
  @Input() rango: {min: number, max: number} = {min: 0, max: 100};

  estado: string = "apagada";
  intensidad: number = 0;

  @Output() alerta = new EventEmitter<string>();

  encender() {
    this.estado = "encendida";
    this.intensidad = 50; //Intensidad default
    this.verificarUmbral();
  }

  apagar() {
    this.estado = "apagada";
    this.intensidad = 0;
  }

  bloquear() {
    this.estado = "bloqueada";
  }


  verificarUmbral() {
    if(this.intensidad > this.rango.max) {
      this.alerta.emit(`La luz ${this.nombre} ha superado el umbral de intensidad ${this.rango.max} con ${this.intensidad}`);
      this.bloquear();
    }
  }
}
