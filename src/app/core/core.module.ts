import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './ngrx/reducers/index';
import {StoreModule} from '@ngrx/store';
import { EmployeEffects } from './ngrx/effects/employe.effects';
import { MachineryEffects } from './ngrx/effects/machinery.effects';
import { ScheduleEffects } from './ngrx/effects/schedule.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('AppState',reducers),
    EffectsModule.forRoot([EmployeEffects, MachineryEffects, ScheduleEffects])
  ]
})
export class CoreModule { }
