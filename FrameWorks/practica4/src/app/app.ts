import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pelicula = {
    id: 0,
    titulo: "",
    horario: "",
    butacasTotales: 0,
    butacasOcupadas: 0,
    precio: 0
  };

  reservas: any[] = [];
  nombreCliente: string = '';
  cantidadReservada: number = 1;
  mensaje: string = '';


  peliculas = [
    { id: 1, titulo: "Avengers: Endgame", horario: '18:00', butacasTotales: 50, butacasOcupadas: 10, precio: 8 },
    { id: 2, titulo: "Avatar 2", horario: '20:00', butacasTotales: 60, butacasOcupadas: 45, precio: 10 },
    { id: 3, titulo: "Mario Bros", horario: '16:00', butacasTotales: 40, butacasOcupadas: 5, precio: 7 },
  ]

  hayRegistros() {
    return this.peliculas.length > 0;
  }

  reservar() {
  const disponibles = this.pelicula.butacasTotales - this.pelicula.butacasOcupadas;

  if (this.cantidadReservada > disponibles) {
    this.mensaje = disponibles === 0
      ? 'No quedan butacas para esta película'
      : `Solo quedan ${disponibles} butacas para esta película`;
    return;
  }

  // Actualizar butacas ocupadas
  const index = this.peliculas.findIndex(p => p.id === this.pelicula.id);
  this.peliculas[index].butacasOcupadas += this.cantidadReservada;

  // Añadir reserva
  this.reservas.push({
    nombre: this.nombreCliente,
    pelicula: this.pelicula.titulo,
    cantidad: this.cantidadReservada,
    total: this.cantidadReservada * this.pelicula.precio
  });

  // Resetear formulario
  this.nombreCliente = '';
  this.cantidadReservada = 1;
  this.pelicula = {
    id: 0,
    titulo: "",
    horario: "",
    butacasTotales: 0,
    butacasOcupadas: 0,
    precio: 0
  };
  this.mensaje = '';
}



  seleccionar(peli: any) {
    this.pelicula = {...peli};
    this.mensaje = '';
  }
}
