import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  imports: [FormsModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  nombre: string = "";
  edad: number = 0;
  sexo: string = "";

  @Output() formulario = new EventEmitter<{nombre: string, edad:number, sexo: string}>();

  enviarDatos() {
    this.formulario.emit({nombre: this.nombre, edad: this.edad, sexo: this.sexo});
  }
}
