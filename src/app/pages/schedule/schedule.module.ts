import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleRouting } from './schedule.routing';

@NgModule({
  declarations: [ScheduleListComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    ScheduleRouting
  ],
  providers: []
})
export class ScheduleModule { }
