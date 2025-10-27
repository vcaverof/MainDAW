import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  art = {
    codigo: 0,
    descripcion: "",
    precio: 0
  };

  articulos = [
    { codigo: 1, descripcion: "patatas", precio: 10.55 },
    { codigo: 2, descripcion: "manzanas", precio: 12.10 },
    { codigo: 3, descripcion: "melón", precio: 52.30 },
    { codigo: 4, descripcion: "cebollas", precio: 17 },
    { codigo: 5, descripcion: "calabaza", precio: 20 }
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(codigo: number) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == codigo) {
        this.articulos.splice(i, 1);
        return;
      }
    }
  }


  agregar() {
    if (this.art.codigo == 0) {
      alert("Debe ingresar un código distinto a 0");
      return;
    }

    for(let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        alert("Ya existe un artículo con este código");
        return;
      }
      this.articulos.push({
        codigo: this.art.codigo,
        descripcion: this.art.descripcion,
        precio: this.art.precio
      });
      this.art.codigo = 0;
      this.art.descripcion = "";
      this.art.precio = 0;
    }
  }
}
