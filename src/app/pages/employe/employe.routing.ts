import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployesListComponent} from './employes-list/employes-list.component';
import { EmployeEditCreateComponent } from './employe-edit-create/employe-edit-create.component';


const routes: Routes = [
  {
    path: '',
    component: EmployesListComponent
  },
  {
    path: 'crear',
    component: EmployeEditCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRouting { }
