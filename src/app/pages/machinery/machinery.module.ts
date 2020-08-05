import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { MachineryRouting } from './machinery.routing';
import { MachineryCreateComponent } from './machinery-create/machinery-create.component';
import { MachineryEditComponent } from './machinery-edit/machinery-edit.component';

// Modules
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import * as fromMachinery from '@core/ngrx/reducers/machinery.reducer'
import { MachineryService } from '@app/core/services/machinery/machinery.service';

@NgModule({
  declarations: [MachineryListComponent, MachineryCreateComponent, MachineryEditComponent],
  imports: [
    CommonModule,
    MachineryRouting,
    SharedModule,
    LayoutModule,
    StoreModule.forFeature(fromMachinery.machineryFeatureKey, fromMachinery.reducer)
  ],
  providers: [MachineryService]
})
export class MachineryModule { }
