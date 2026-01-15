import { Routes } from '@angular/router';
import { America } from './america/america';
import { Europa } from './europa/europa';
import { Chile } from './america/chile/chile';
import { Argentina } from './america/argentina/argentina';
import { Uruguay } from './america/uruguay/uruguay';
import { Francia } from './europa/francia/francia';
import { Espana } from './europa/espana/espana';
import { Italia } from './europa/italia/italia';

export const routes: Routes = [
    {
        path: 'america',
        component: America,
        children: [
            {
                path: 'chile',
                component: Chile
            },
            {
                path: 'argentina',
                component: Argentina
            },
            {
                path: 'uruguay',
                component: Uruguay
            }
        ]
    },
    {
        path: 'europa',
        component: Europa,
        children: [
            {
                path: 'espana',
                component: Espana
            },
            {
                path: 'italia',
                component: Italia
            },
            {
                path: 'francia',
                component: Francia
            }
        ]
    }
];
