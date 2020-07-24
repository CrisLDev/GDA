import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Employe} from '@shared/interfaces/Employes/Employe';
import {EmployeService} from '@core/services/employe/employe.service';
import { Store } from '@ngrx/store';
import { EmployeState } from '@app/store/reducers/employe.reducer';
import * as fromActions from '@app/store/actions/employe.actions';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes: Observable<Employe[]>;

  constructor(private employeService: EmployeService, public router: Router, private store: Store<EmployeState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.getEmployes());
    this.getEmployes();
  }

  getEmployes(){
    const employesObserver = {
      next: employes => {
        this.store.dispatch(fromActions.getEmployesSuccess({employes: employes}));
        this.employes = employes;
      },
      error: err => {
        this.store.dispatch(fromActions.getEmployesFailure({error: err}));
        console.error(err);
      }
    };

    this.employeService.getEmployes().subscribe(employesObserver);
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
