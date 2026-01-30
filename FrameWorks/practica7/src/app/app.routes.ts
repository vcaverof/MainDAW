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
            {
                path: '1',
                component: ProductoDetalle,
                data: {
                    id: 1,
                    nombre: 'Televisor 4k',
                    precio: 499,
                    descripcion: 'TV UHD de 55 pulgadas',
                    imagen: '/tv.jpg'
                }
            },
            {
                path: '2',
                component: ProductoDetalle,
                data: {
                    id: 2,
                    nombre: 'Camiseta Azul',
                    precio: 19,
                    descripcion: 'Camiseta 100% algodon',
                    imagen: '/camiseta.jpg'
                }
            },
            {
                path: '3',
                component: ProductoDetalle,
                data: {
                    id: 3,
                    nombre: 'Manzanas',
                    precio: 3,
                    descripcion: 'Bolsa de 1kg de manzanas',
                    imagen: '/manzanas.jpg'
                }
            }


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
