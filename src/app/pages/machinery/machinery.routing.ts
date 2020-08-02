import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { MachineryCreateComponent } from './machinery-create/machinery-create.component';

const routes: Routes = [
  {
    path: '',
    component: MachineryListComponent
  },
  {
    path: 'crear',
    component: MachineryCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineryRouting { }
