import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    //canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  
    ]
  }
];

export const PagesRoutingModule:  ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);
