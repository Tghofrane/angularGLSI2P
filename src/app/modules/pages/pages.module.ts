import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    
  ],
  declarations: [
    PagesComponent,
    NavbarComponent
  ],
  exports: [],
  providers: []
})
export class PagesModule { }
