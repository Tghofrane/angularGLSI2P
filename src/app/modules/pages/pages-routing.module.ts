import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // Child route for the empty path, redirects to '/home'
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // Child route for 'home' path, lazy-loads the 'HomeModule' when '/home' is accessed.
      { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      // Child route for 'library' path, lazy-loads the 'LibraryModule' when '/library' is accessed.
      { path: 'library', loadChildren: () => import('./library/library.module').then((m) => m.LibraryModule) },
    ]
  }
];

export const PagesRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
