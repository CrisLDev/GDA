import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './ngrx/reducers/index';
import {StoreModule} from '@ngrx/store';
import { EmployeEffects } from './ngrx/effects/employe.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('AppState',reducers),
    EffectsModule.forRoot([EmployeEffects])
  ]
})
export class CoreModule { }
