import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tablanro',
  imports: [RouterOutlet],
  templateUrl: './tablanro.html',
  styleUrl: './tablanro.css',
})
export class Tablanro {
  nro = 0;
  tabla = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!);
      this.tabla = '';
      for (let x = 1; x <= 10; x++) {
        let t = x * this.nro;
        this.tabla += t + '-';
      }
    })
  }
}
