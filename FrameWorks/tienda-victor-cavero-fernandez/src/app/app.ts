import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductos } from "./listado-productos/listado-productos";
import { CommonModule } from '@angular/common';
import { DetalleProducto } from "./detalle-producto/detalle-producto";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductos, CommonModule, DetalleProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productos = [
    {nombre: "producto1", precio: 10, stock: 20},
    {nombre: "producto2", precio: 20, stock: 50},
    {nombre: "producto3", precio: 40, stock: 0},
  ];

  productoSeleccionado = {nombre: "", precio: 0, stock: 0};

  recibirDetalles(producto: {nombre: string, precio: number, stock: number} ) {
    this.productoSeleccionado = {nombre: producto.nombre, precio:  producto.precio, stock: producto.stock};
  }

  recibirDescuento(productoSeleccionado: {productoNombre: string, nuevoPrecio: number}) {
    for (let producto of this.productos) {
      if (producto.nombre == productoSeleccionado.productoNombre) {
        producto.precio = productoSeleccionado.nuevoPrecio;
      }
    }
  }

}
