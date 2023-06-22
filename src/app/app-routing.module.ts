import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/authentication/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
});
