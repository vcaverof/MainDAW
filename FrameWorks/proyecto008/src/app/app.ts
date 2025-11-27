import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  conversion = "";
  potenciaNumero = "";
  cantidad = "";
  formularioConversion = new FormGroup({
    numeroDecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl('2'),
    largo: new FormControl(true),
  });

  submit() {
    if (this.formularioConversion.value.numeroDecimal) {
      if (this.formularioConversion.value.base == "hexadecimal") {
        this.conversion = parseInt(this.formularioConversion.value.numeroDecimal).toString(16);
      }
      if (this.formularioConversion.value.base == "octal") {
        this.conversion = parseInt(this.formularioConversion.value.numeroDecimal).toString(8);
      }

      if(this.formularioConversion.value.numeroDecimal && this.formularioConversion.value.potencia) {
        this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numeroDecimal), parseInt(this.formularioConversion.value.potencia)).toString();
      }

      if (this.formularioConversion.value.largo) {
        this.cantidad = this.formularioConversion.value.numeroDecimal.length.toString();
      }
    }
  }
}
