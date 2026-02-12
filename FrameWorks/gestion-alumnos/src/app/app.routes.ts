import { Routes } from '@angular/router';
import { MostrarAlumnos } from './mostrar-alumnos/mostrar-alumnos';
import { AgregarAlumno } from './agregar-alumno/agregar-alumno';
import { DetallesAlumno } from './detalles-alumno/detalles-alumno';
import { Error404 } from './error404/error404';

export const routes: Routes = [
    {
        path: 'alumnos',
        component: MostrarAlumnos,
    },
    {
        path: 'alumno/nuevo',
        component: AgregarAlumno,
    },
    {
        path: 'alumnos/:id/info',
        component: DetallesAlumno,
    },
    {
        path: '**',
        component: Error404,
    }
];
