import { Component } from '@angular/core';

interface ProductoDetalle {
  id: number,
  nombre: string,
  precio: number,
  descripcion: string,
  imagen: string;
}

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})

export class ProductoDetalle {

}
