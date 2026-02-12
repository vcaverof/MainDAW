import { Injectable } from '@angular/core';
import { Alumno } from './models/alumnos.model';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Pedro Gómez', email: 'pedro@gmail.com', edad: 13, curso: '1ºESO', becado: false, direccion: { calle: 'Calle Soto 1', ciudad: 'Valladolid' } },
    { id: 2, nombre: 'Laura Pérez', email: 'laura@gmail.com', edad: 15, curso: '3ºESO', becado: true, direccion: { calle: 'Calle Germán 4', ciudad: 'Pamplona' } },
    { id: 3, nombre: 'Juan Giménez', email: 'juan@gmail.com', edad: 13, curso: '1ºESO', becado: false, direccion: { calle: 'Calle Kilo 17', ciudad: 'Zamora' } },
    { id: 4, nombre: 'Paco García', email: 'paco@gmail.com', edad: 14, curso: '2ºESO', becado: false, direccion: { calle: 'Calle Coche 19', ciudad: 'Asturias' } },
    { id: 5, nombre: 'María López', email: 'maria@gmail.com', edad: 16, curso: '4ºESO', becado: true, direccion: { calle: 'Calle Naranjo 15', ciudad: 'Barcelona' } },
    { id: 6, nombre: 'Marta Sanz', email: 'marta@gmail.com', edad: 15, curso: '3ºESO', becado: true, direccion: { calle: 'Calle Peral 29', ciudad: 'Madrid' } },
    { id: 7, nombre: 'Alejandro Olmo', email: 'alejandro@gmail.com', edad: 16, curso: '4ºESO', becado: false, direccion: { calle: 'Calle Arce 2', ciudad: 'Valladolid' } },
    { id: 8, nombre: 'Joel Baena', email: 'joel@gmail.com', edad: 13, curso: '1ºESO', becado: false, direccion: { calle: 'Calle Olmo 27', ciudad: 'Zamora' } },
    { id: 9, nombre: 'Antía Alfonso', email: 'antia@gmail.com', edad: 14, curso: '2ºESO', becado: true, direccion: { calle: 'Calle Pino 24', ciudad: 'Burgos' } },
    { id: 10, nombre: 'Enzo Veganzones', email: 'enzo@gmail.com', edad: 14, curso: '2ºESO', becado: false, direccion: { calle: 'Calle Sauce 1', ciudad: 'Palencia' } },
  ];
  formulario: any;
  AlumnosService: any;

  getAlumnos() {
    return this.alumnos;
  }

  getAlumno(id: number) {
    return this.alumnos.find(p => p.id === id);
  }

  addAlumno(alumno: Alumno) {
    const nuevoId = Number(this.alumnos[this.alumnos.length - 1].id + 1);
    alumno.id = nuevoId;
    this.alumnos.push(alumno);
  }
}
