import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',
    loadChildren: () => import('@pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: {name: 'dashboard'}
  },
  { path: 'empleados',
    loadChildren: () => import('@pages/employe/employe.module').then(m => m.EmployeModule), data: {name: 'empleados'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
