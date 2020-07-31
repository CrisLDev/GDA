import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '../shared.module';
import {LayoutModule} from './layout/layout.module';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule
  ],
  exports: [
    LayoutModule,
    Error404Component
  ]
})
export class ComponentsModule { }
