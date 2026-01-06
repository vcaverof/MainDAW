import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuarios } from './services/usuarios';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuariosService: Usuarios) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data: Usuario[]) => {
        this.usuarios = data;
      },
      error: (err: any) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }
}
