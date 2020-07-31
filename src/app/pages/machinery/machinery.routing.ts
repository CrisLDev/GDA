import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { MachineryListComponent } from './machinery-list/machinery-list.component';

const routes: Routes = [
  {
    path: '',
    component: MachineryListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineryRouting { }
