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
  peliculas = [
    { id: 1, titulo: 'Avengers: Endgame', horario: '18:00', butacasTotales: 50, butacasOcupadas: 10, precio: 8 },
    { id: 2, titulo: 'Avatar 2', horario: '20:00', butacasTotales: 60, butacasOcupadas: 45, precio: 10 },
    { id: 3, titulo: 'Mario Bros', horario: '16:00', butacasTotales: 40, butacasOcupadas: 5, precio: 7 }
  ];

  reservas: any[] = [];
  nombre: string = '';
  peliculaId: number | null = null;
  cantidad: number = 1;
  mensaje: string | null = null;

  get disponibles(): number {
    const pelicula = this.peliculas.find(p => p.id === this.peliculaId);
    return pelicula ? pelicula.butacasTotales - pelicula.butacasOcupadas : 0;
  }

  reservar() {
    const pelicula = this.peliculas.find(p => p.id === this.peliculaId);
    if (!pelicula) return;

    const disponibles = pelicula.butacasTotales - pelicula.butacasOcupadas;

    if (this.cantidad > disponibles) {
      this.mensaje = disponibles > 0
        ? `Solo quedan ${disponibles} butacas para esta película`
        : 'No quedan butacas para esta película';
      return;
    }

    pelicula.butacasOcupadas += this.cantidad;
    const precioTotal = this.cantidad * pelicula.precio;

    this.reservas.push({
      nombre: this.nombre,
      pelicula: pelicula.titulo,
      cantidad: this.cantidad,
      precioTotal
    });

    this.mensaje = null;
    this.nombre = '';
    this.peliculaId = null;
    this.cantidad = 1;
  }
}
