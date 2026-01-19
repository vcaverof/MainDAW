import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

interface Producto {
  id: number,
  nombre: string,
  categoria: 'electronica' | 'ropa' | 'alimentos';
}

@Component({
  selector: 'app-productos',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos: Producto[] = [
    { id: 1, nombre: 'Auriculares Bluetooth', categoria: 'electronica' },
    { id: 2, nombre: 'Camiseta básica', categoria: 'ropa' }, 
    { id: 3, nombre: 'Café molido', categoria: 'alimentos' },
  ];
}
