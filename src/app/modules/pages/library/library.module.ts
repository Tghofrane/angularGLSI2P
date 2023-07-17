import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library-routing.module';
import { BookFormComponent } from 'src/app/components/book-form/book-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LibraryComponent,
    BookFormComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule
  ]
})
export class LibraryModule { }
