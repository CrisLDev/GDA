import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorGuard } from './core/guards/error.guard';
import { Error404Component } from './shared/components/error404/error404.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',
    loadChildren: () => import('@pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: {name: 'dashboard'}
  },
  { path: 'empleados',
    loadChildren: () => import('@pages/employe/employe.module').then(m => m.EmployeModule), data: {name: 'empleados'}
  },
  {path: 'maquinarias',
    loadChildren: () => import('@pages/machinery/machinery.module').then(m => m.MachineryModule), data: {
      name: 'maquinarias'
    }
  },
  {path: '**', canActivate:[ErrorGuard], component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
