import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Mapa } from './mapa/mapa';
import { Contacto } from './contacto/contacto';
import { AcercaDe } from './acerca-de/acerca-de';
import { Pagina404 } from './pagina404/pagina404';

export const routes: Routes = [{
    path: '',
    component: Inicio
},
{
    path: 'inicio',
    component: Inicio
},
{
    path: 'mapa',
    component: Mapa
},
{
    path: 'contacto',
    component: Contacto
},
{
    path: 'acercade',
    component: AcercaDe
},
{
    path: 'pagina404',
    component: Pagina404
},
{
    path:'**',
    redirectTo: 'pagina404'
}];
