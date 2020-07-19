import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '../shared.module';
import {LayoutModule} from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule
  ],
  exports: [
    LayoutModule
  ]
})
export class ComponentsModule { }
