import { Routes } from '@angular/router';
import { ListadoPeliculas } from './listado-peliculas/listado-peliculas';
import { DetallePeliculas } from './detalle-peliculas/detalle-peliculas';
import { AgregarPelicula } from './agregar-pelicula/agregar-pelicula';

export const routes: Routes = [
    {
        path: 'peliculas',
        component: ListadoPeliculas,
    },
    {
        path: 'peliculas/:id',
        component: DetallePeliculas,
    },
    {
        path: 'agregar',
        component: AgregarPelicula
    },
    
];
