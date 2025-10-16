import { Component, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Selectornumerico } from "./selectornumerico/selectornumerico";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Selectornumerico],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('selector1') selector1!: Selectornumerico;
  @ViewChild('selector2') selector2!: Selectornumerico;

  fijarSelector1(valor: number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor: number) {
    this.selector2.fijar(valor);
  }
}