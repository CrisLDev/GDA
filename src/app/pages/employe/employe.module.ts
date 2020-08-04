import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {EmployeComponent} from './employe/employe.component';
import {EmployeCreateComponent} from '@app/pages/employe/employe-create/employe-create.component';
import {EmployeRouting} from './employe.routing';
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';
import {EmployeService} from '@core/services/employe/employe.service';
import {StoreModule} from '@ngrx/store';
import * as fromEmploye from '@core/ngrx/reducers/employe.reducer';
import { EmployesListComponent } from '@pages/employe/employes-list/employes-list.component';
import { EmployeEditComponent } from './employe-edit/employe-edit.component';

@NgModule({
  declarations: [EmployeComponent, EmployeCreateComponent,EmployesListComponent, EmployeEditComponent],
  imports: [
    CommonModule,
    EmployeRouting,
    SharedModule,
    LayoutModule,
    StoreModule.forFeature(fromEmploye.employeFeatureKey, fromEmploye.reducer)
  ],
  providers: [EmployeService]
})
export class EmployeModule { }
