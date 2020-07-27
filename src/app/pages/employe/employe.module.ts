import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {EmployeComponent} from './employe.component';
import {EmployeEditCreateComponent} from '@pages/employe/employe-edit-create/employe-edit-create.component';
import {EmployeRouting} from './employe.routing';
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';
import {EmployeService} from '@core/services/employe/employe.service';
import {StoreModule} from '@ngrx/store';
import * as fromEmploye from '@core/ngrx/reducers/employe.reducer';
import { EmployesListComponent } from '@pages/employe/employes-list/employes-list.component';

@NgModule({
  declarations: [EmployeComponent, EmployeEditCreateComponent,EmployesListComponent],
  imports: [
    CommonModule,
    EmployeRouting,
    SharedModule,
    LayoutModule,
    StoreModule.forFeature(fromEmploye.employeKey, fromEmploye.reducer)
  ],
  providers: [EmployeService]
})
export class EmployeModule { }
