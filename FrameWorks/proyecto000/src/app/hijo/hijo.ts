import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})

export class Hijo {
  @Output() mensaje = new EventEmitter<string>();

  enviarMensaje() {
    this.mensaje.emit('¡Hola padre, soy tu hijo!');
  }
}
