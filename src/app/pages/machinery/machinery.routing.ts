import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { MachineryCreateComponent } from './machinery-create/machinery-create.component';
import { MachineryEditComponent } from './machinery-edit/machinery-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MachineryListComponent
  },
  {
    path: 'crear',
    component: MachineryCreateComponent
  },
  {
    path: 'editar/:id',
    component: MachineryEditComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineryRouting { }
