import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
      {path: 'library', loadChildren: () => import('./library/library.module').then((m) => m.LibraryModule) },

  
    ]
  }
];

export const PagesRoutingModule:  ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);
