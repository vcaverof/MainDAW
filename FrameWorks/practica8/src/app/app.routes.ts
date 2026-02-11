import { Routes } from '@angular/router';
import { ListaPeliculas } from './lista-peliculas/lista-peliculas';
import { FormularioPelicula } from './formulario-pelicula/formulario-pelicula';

export const routes: Routes = [
    {
        path: 'peliculas',
        component: ListaPeliculas,
    },
    {
        path: 'agregar',
        component: FormularioPelicula,
    }
];
