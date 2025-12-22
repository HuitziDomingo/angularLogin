import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'login', loadComponent: () => import('./components/login/auth/auth').then(m => m.Auth)},
]
