import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];

export const AuthRoutingModule:  ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);
