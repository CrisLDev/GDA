import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeComponent} from './employe.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRouting { }
