import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { MachineryRouting } from './machinery.routing';
import { MachineryCreateComponent } from './machinery-create/machinery-create.component';
import { MachineryEditComponent } from './machinery-edit/machinery-edit.component';
import { MachineryComponent } from './machinery/machinery.component';



@NgModule({
  declarations: [MachineryListComponent, MachineryCreateComponent, MachineryEditComponent, MachineryComponent],
  imports: [
    CommonModule,
    MachineryRouting
  ]
})
export class MachineryModule { }
