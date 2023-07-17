import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';

const routes: Routes = [
  { path: '', component: LibraryComponent }
];

export const LibraryRoutingModule: ModuleWithProviders<RouterModule>  = RouterModule.forChild(routes);
