import { Component, OnInit } from '@angular/core';
import { EmployeState } from '@app/core/ngrx/reducers/employe.reducer';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";
import * as fromActions from "@core/ngrx/actions/employe.actions";
import { selectEmployes } from '@app/core/ngrx/selectors/employe.selectors';
import { Employe } from '@app/shared/interfaces/Employes/Employe';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

  employes$: Observable<Employe[]>;

  constructor(
    public router: Router,
    private store: Store<EmployeState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.getEmployes());
    this.getEmployes();
  }

  getEmployes() {
    this.employes$ = this.store.pipe(select(selectEmployes));
  }

  selectedEmploye(id:string){
    this.router.navigate(['/editar', id]);
  }

}
