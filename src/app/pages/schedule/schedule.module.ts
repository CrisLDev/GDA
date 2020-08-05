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

@NgModule({
  declarations: [ScheduleListComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    ScheduleRouting,
    StoreModule.forFeature(fromEmploye.employeFeatureKey, fromEmploye.reducer),
    StoreModule.forFeature(fromMachinery.machineryFeatureKey, fromMachinery.reducer)
  ],
  providers: []
})
export class ScheduleModule { }
