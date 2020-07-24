import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Employe} from '@shared/interfaces/Employes/Employe';
import {EmployeService} from '@core/services/employe/employe.service';
import { Store, select } from '@ngrx/store';
import { EmployeState, selectEmployes} from '@core/ngrx/reducers/employe.reducer';
import * as fromActions from '@core/ngrx/actions/employe.actions';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes$: Observable<Employe[]>;

  constructor(
    private employeService: EmployeService, 
    public router: Router, 
    private store: Store<EmployeState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.getEmployes());
    this.getEmployes();
  }

  getEmployes(){
    const employesObserver = {
      next: employes => {
        this.store.dispatch(fromActions.getEmployesSuccess({employes: employes}));
      },
      error: err => {
        this.store.dispatch(fromActions.getEmployesFailure({error: err}));
        console.error(err);
      }
    };

    this.employeService.getEmployes().subscribe(employesObserver);
    this.employes$ = this.store.pipe(select(selectEmployes));
    console.log(this.employes$);
  }

}
