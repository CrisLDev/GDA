import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '@shared/shared.module';
import {NavbarModule} from './navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule
  ],
  exports:[
    NavbarModule
  ]
})
export class LayoutModule { }
