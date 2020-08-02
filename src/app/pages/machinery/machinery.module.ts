import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { MachineryRouting } from './machinery.routing';
import { MachineryCreateComponent } from './machinery-create/machinery-create.component';
import { MachineryEditComponent } from './machinery-edit/machinery-edit.component';
import { MachineryComponent } from './machinery/machinery.component';

// Modules
import {SharedModule} from '@shared/shared.module';
import {LayoutModule} from '@shared/components/layout/layout.module';

@NgModule({
  declarations: [MachineryListComponent, MachineryCreateComponent, MachineryEditComponent, MachineryComponent],
  imports: [
    CommonModule,
    MachineryRouting,
    SharedModule,
    LayoutModule
  ]
})
export class MachineryModule { }
