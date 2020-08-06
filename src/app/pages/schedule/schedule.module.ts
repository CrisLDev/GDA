import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleRouting } from './schedule.routing';
import { StoreModule } from '@ngrx/store';
import * as fromMachinery from '@core/ngrx/reducers/machinery.reducer';
import * as fromEmploye from '@core/ngrx/reducers/employe.reducer';
import * as fromSchedule from '@core/ngrx/reducers/schedule.reducer';
import { ScheduleService } from '@app/core/services/schedule/schedule.service';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

@NgModule({
  declarations: [ScheduleListComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    ScheduleRouting,
    NgxPageScrollModule,
    NgxPageScrollCoreModule.forRoot({duration: 650}),
    StoreModule.forFeature(fromSchedule.scheduleFeatureKey, fromSchedule.reducer),
    StoreModule.forFeature(fromEmploye.employeFeatureKey, fromEmploye.reducer),
    StoreModule.forFeature(fromMachinery.machineryFeatureKey, fromMachinery.reducer)
  ],
  providers: [ScheduleService]
})
export class ScheduleModule { }
