import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  // Route for the 'app' path
  {
    path: 'app',
    loadChildren: () => import('./modules/pages/pages.module').then((m) => m.PagesModule),
    // Lazy-loading the 'PagesModule' when the path '/app' is accessed.
    // The 'PagesModule' contains child routes for this path.
  },
  // Default route - redirect to '/app' for empty path ('/')
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  // Catch-all route for any undefined paths (404 Not Found)
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

export const AppRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
});
