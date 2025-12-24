import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login/auth/auth').then(m => m.Auth)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login',

    }
]
