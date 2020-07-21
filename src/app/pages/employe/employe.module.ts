import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {EmployeComponent} from './employe.component';
import {EmployeEditCreateComponent} from './components/employe-edit-create/employe-edit-create.component';
import {EmployeRouting} from './employe.routing';
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';

@NgModule({
  declarations: [EmployeComponent, EmployeEditCreateComponent],
  imports: [
    CommonModule,
    EmployeRouting,
    SharedModule,
    LayoutModule
  ]
})
export class EmployeModule { }
