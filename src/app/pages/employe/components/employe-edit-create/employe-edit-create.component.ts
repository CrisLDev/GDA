import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeService } from '@app/core/services/employe/employe.service';
import { Store } from '@ngrx/store';
import { EmployeState } from '@app/core/ngrx/reducers/employe.reducer';
import * as fromActions from '@core/ngrx/actions/employe.actions'
import { Employe } from '@app/shared/interfaces/Employes/Employe';

@Component({
  selector: 'app-employe-edit-create',
  templateUrl: './employe-edit-create.component.html',
  styleUrls: ['./employe-edit-create.component.css']
})
export class EmployeEditCreateComponent implements OnInit {

  @Input() datoo: Employe;

  constructor(private employeService: EmployeService, private store: Store<EmployeState>) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    this.store.dispatch(fromActions.createEmploye({employe: f.value}));
  }

}
