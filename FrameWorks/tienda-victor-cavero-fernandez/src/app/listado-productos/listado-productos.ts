import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  imports: [],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  @Input() producto: {nombre: string, precio: number, stock: number} = {nombre: "", precio: 0, stock: 0};

  @Output() detalles = new EventEmitter< {nombre: string, precio: number, stock: number}>();

  verDetalles() {
    this.detalles.emit({nombre: this.producto.nombre, precio: this.producto.precio, stock: this.producto.stock});
  }
}
