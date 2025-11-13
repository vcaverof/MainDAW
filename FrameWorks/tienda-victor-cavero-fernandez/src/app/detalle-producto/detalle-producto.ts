import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  imports: [],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto {
  @Input() producto: { nombre: string, precio: number, stock: number } = { nombre: "", precio: 0, stock: 0 };

  @Output() descuento = new EventEmitter<{productoNombre: string, nuevoPrecio: number}>();

  agregarDescuento() {
    this.producto.precio = this.producto.precio - (this.producto.precio * 0.2);
    this.descuento.emit({productoNombre: this.producto.nombre, nuevoPrecio: this.producto.precio});
  }
}