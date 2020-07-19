import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '@shared/shared.module';
import {NavbarModule} from './navbar/navbar.module';
import {FooterModule} from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    FooterModule
  ],
  exports:[
    NavbarModule,
    FooterModule
  ]
})
export class LayoutModule { }
