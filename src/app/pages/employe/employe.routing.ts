import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployesListComponent} from './employes-list/employes-list.component';
import { EmployeCreateComponent } from './employe-create/employe-create.component';
import { EmployeEditComponent } from './employe-edit/employe-edit.component';
import { EmployeComponent } from './employe/employe.component';


const routes: Routes = [
  {
    path: '',
    component: EmployesListComponent
  },
  {
    path: 'crear',
    component: EmployeCreateComponent
  },
  {
    path: 'editar/:id',
    component: EmployeEditComponent
  },
  {
    path: ':id',
    component: EmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRouting { }
