import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '@shared/shared.module';

// Components
import {FooterComponent} from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent
  ],
})
export class FooterModule { }
