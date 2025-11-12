import { Component, QueryList, signal, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucesComponent } from './luces-component/luces-component';
import { VentiladoresComponent } from './ventiladores-component/ventiladores-component';
import { CalefactoresComponent } from './calefactores-component/calefactores-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucesComponent, VentiladoresComponent, CalefactoresComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  luces = [
    {nombre: "luz1", rango: {min: 0, max: 100}},
    {nombre: "luz2", rango: {min: 0, max: 80}},
    {nombre: "luz3", rango: {min: 0, max: 45}},
  ];

  ventiladores = [
    {nombre: "ventilador1", rango: {min: 0, max: 70}},
    {nombre: "ventilador2", rango: {min: 0, max: 50}},
    {nombre: "ventilador3", rango: {min: 0, max: 100}},
  ];

  calefactores = [
    {nombre: "calefactor1", rango: {min: 0, max: 50}},
    {nombre: "calefactor2", rango: {min: 0, max: 10}},
    {nombre: "calefactor3", rango: {min: 0, max: 70}},
  ];

  @ViewChildren (LucesComponent) lucesView!: QueryList<LucesComponent>;
  @ViewChildren (VentiladoresComponent) ventialdoresView!: QueryList<LucesComponent>;
  @ViewChildren (CalefactoresComponent) calefactoresView!: QueryList<LucesComponent>;

  encenderTodos() {
    this.lucesView.forEach(luz => luz.encender());
    this.ventialdoresView.forEach(ventilador => ventilador.encender());
    this.calefactoresView.forEach(calefactor => calefactor.encender());
  }

  apagarTodos() {
    this.lucesView.forEach(luz => luz.apagar());
    this.ventialdoresView.forEach(ventilador => ventilador.apagar());
    this.calefactoresView.forEach(calefactor => calefactor.apagar());
  }

  bloquearTodos() {
    this.lucesView.forEach(luz => luz.bloquear());
    this.ventialdoresView.forEach(ventilador => ventilador.bloquear());
    this.calefactoresView.forEach(calefactor => calefactor.bloquear());
  }

  manejarAlerta(mensaje: string) {
    alert(mensaje);
  }

}
