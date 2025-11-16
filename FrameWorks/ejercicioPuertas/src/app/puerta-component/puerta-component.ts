import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-puerta-component',
  imports: [CommonModule],
  templateUrl: './puerta-component.html',
  styleUrl: './puerta-component.css',
})
export class PuertaComponent {
  @Input() nombre: string = "";
  @Input() rango: {min: number, max: number} = {min: 50, max: 200};

  estado: string = "cerrada";
  tiempo: number = 0;

  @Output() alerta = new EventEmitter<string>();

  abrir() {
    this.estado = "abierta";
    this.tiempo = 0 //Tiempo por defecto
    const intervalo = setInterval(() => {
      if (this.estado !== "abierta") {
        clearInterval(intervalo);
        return;
      }
      this.tiempo++;
      if(this.tiempo > this.rango.max) {
        this.verificarTiempo();
        this.bloquear();
        clearInterval(intervalo);
      }
    }, 800)
  }

  cerrar() {
    this.estado = "cerrada";
    this.tiempo = 0;
  }

  bloquear() {
    this.estado = "bloqueada";
    this.alerta.emit(`La puerta ${this.nombre} ha sido bloqueada`);
  }

  verificarTiempo() {
    if (this.tiempo > this.rango.max) {
      this.alerta.emit(`La puerta ${this.nombre} ha sobrepasado el limite de tiempo ${this.rango} con ${this.tiempo}`);
    }
  }
  
}
