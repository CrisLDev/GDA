import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {DashboardComponent} from './dashboard.component';
import {DashboardRouting} from './dashboard.routing';
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRouting,
    SharedModule,
    LayoutModule
  ]
})
export class DashboardModule { }
