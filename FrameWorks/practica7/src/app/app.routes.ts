import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { Contacto } from './contacto/contacto';
import { Acercade } from './acercade/acercade';
import { Error404 } from './error404/error404';
import { ProductoDetalle } from './producto-detalle/producto-detalle';
import { Electronica } from './productos/electronica/electronica';
import { Ropa } from './productos/ropa/ropa';
import { Alimentos } from './productos/alimentos/alimentos';


export const routes: Routes = [
    {
        path: 'inicio',
        component: Inicio,
    },
    {
        path: 'productos',
        component: Productos,
        children: [
            {
                path: 'electronica',
                component: Electronica,
            },
            {
                path: 'ropa',
                component: Ropa,
            },
            {
                path: 'alimentos',
                component: Alimentos,
            },
        ]
    },
    {
        path: 'contacto',
        component: Contacto,
    },
    {
        path: 'acercade',
        component: Acercade,
    },
    {
        path: 'error404',
        component: Error404,
    },
    {
        path: '**',
        redirectTo:'error404',
    },
    {
        path: 'producto/:id',
        component: ProductoDetalle
    }
];
