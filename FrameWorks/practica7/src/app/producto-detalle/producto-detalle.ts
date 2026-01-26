import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})

export class ProductoDetalle {
  producto: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.producto = this.route.snapshot.data;
  }
}
