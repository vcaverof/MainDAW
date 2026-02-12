import { Component, signal } from '@angular/core';
import { Alumno } from './models/alumnos.model';
import { AlumnosService } from './alumnos-service';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
