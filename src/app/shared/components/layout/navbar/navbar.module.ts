import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '@shared/shared.module';

// Components
import {NavbarComponent} from './navbar.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [NavbarComponent, MobileNavComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarModule { }
