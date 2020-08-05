import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MachineryState } from '@app/core/ngrx/reducers/machinery.reducer';
import { Store, select } from '@ngrx/store';
import * as fromActionsEmployes from "@core/ngrx/actions/employe.actions";
import * as fromActionsMachineries from '@core/ngrx/actions/machinery.actions';
import { Observable } from 'rxjs';
import { Machinery } from '@app/shared/clases/Machinery/Machinery';
import { selectMachineries } from '@app/core/ngrx/selectors/machinery.selectors';
import { Employe } from '@app/shared/clases/Employes/Employe';
import { selectEmployes } from '@app/core/ngrx/selectors/employe.selectors';
import { EmployeState } from '@app/core/ngrx/reducers/employe.reducer';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  machineries$: Observable<Machinery[]>;

  employes$: Observable<Employe[]>;

  scheduleForm: FormGroup;

  constructor(
              private fb: FormBuilder,
              private storeMachinery: Store<MachineryState>,
              private storeEmploye: Store<EmployeState>
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.storeMachinery.dispatch(fromActionsMachineries.getMachineries());
    this.getMachineries();
    this.storeEmploye.dispatch(fromActionsEmployes.getEmployes());
    this.getEmployes();
  }

  private createForm(){
    this.scheduleForm = this.fb.group({
      employe: [''],
      machinery: [''],
      description: [''],
      place: [''],
      startDate: [''],
      endDate: ['']
    })
  }

  onSubmit(){
    console.log(this.scheduleForm.value)
  }

  getEmployes() {
    this.employes$ = this.storeEmploye.pipe(select(selectEmployes));
  }

  getMachineries(){
    this.machineries$ = this.storeMachinery.pipe(select(selectMachineries));
  }

}
