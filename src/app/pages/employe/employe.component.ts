import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Employe} from '@shared/interfaces/Employes/Employe';
import {EmployeService} from '@core/services/employe/employe.service';
import { Store, select } from '@ngrx/store';
import { EmployeState} from '@core/ngrx/reducers/employe.reducer';
import * as fromActions from '@core/ngrx/actions/employe.actions';
import { selectEmployes } from '@app/core/ngrx/selectors/employe.selectors';

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
    this.employes$ = this.store.pipe(select(selectEmployes));
  };

}
