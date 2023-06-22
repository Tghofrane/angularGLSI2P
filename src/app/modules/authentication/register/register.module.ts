import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
