import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
