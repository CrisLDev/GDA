import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MachineryState } from '@app/core/ngrx/reducers/machinery.reducer';
import { Store, select } from '@ngrx/store';
import * as fromActionsEmployes from "@core/ngrx/actions/employe.actions";
import * as fromActionsMachineries from '@core/ngrx/actions/machinery.actions';
import { Observable } from 'rxjs';
import { Machinery } from '@app/shared/classes/Machinery/Machinery';
import { selectMachineries } from '@app/core/ngrx/selectors/machinery.selectors';
import { Employe } from '@app/shared/classes/Employes/Employe';
import { selectEmployes } from '@app/core/ngrx/selectors/employe.selectors';
import { EmployeState } from '@app/core/ngrx/reducers/employe.reducer';
import { ScheduleState } from '@app/core/ngrx/reducers/schedule.reducer';
import * as fromActions from '@core/ngrx/actions/schedule.actions';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';
import { selectSchedules, selectedSchedule } from '@app/core/ngrx/selectors/schedule.selectors';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  machineries$: Observable<Machinery[]>;

  employes$: Observable<Employe[]>;

  schedules$: Observable<Schedule[]>;

  editModel: any = {};

  scheduleForm: FormGroup;

  constructor(
              private fb: FormBuilder,
              private storeMachinery: Store<MachineryState>,
              private storeEmploye: Store<EmployeState>,
              private store: Store<ScheduleState>
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.storeMachinery.dispatch(fromActionsMachineries.getMachineries());
    this.getMachineries();
    this.storeEmploye.dispatch(fromActionsEmployes.getEmployes());
    this.getEmployes();
    this.store.dispatch(fromActions.getSchedules());
    this.getSchedules();
  }

  private createForm(){
    this.scheduleForm = this.fb.group({
      employe_id: [''],
      machinery_id: [''],
      name: [''],
      description: [''],
      place: [''],
      startDate: [''],
      endDate: ['']
    })
  }

  onSubmit(idExist: string){
    if(idExist){
      const update: Update<Schedule> = {
        id: this.editModel._id,
        changes: this.editModel,
      };
  
      this.store.dispatch(fromActions.updateSchedule({ schedule: update }));
      this.scheduleForm.reset();
      this.editModel = {};
    }else{
      if(this.scheduleForm.valid){
        this.store.dispatch(fromActions.createSchedule({schedule: this.scheduleForm.value}));
        this.scheduleForm.reset();
      }
    }
  }

  getEmployes() {
    this.employes$ = this.storeEmploye.pipe(select(selectEmployes));
  }

  getMachineries(){
    this.machineries$ = this.storeMachinery.pipe(select(selectMachineries));
  }

  getSchedules(){
    this.schedules$ = this.store.pipe(select(selectSchedules));
  }

  refillForm(employe_id: string){
    this.store.dispatch(fromActions.getSchedule({id: employe_id}));

    this.store.pipe(select(selectedSchedule)).subscribe(schedule => (this.editModel = Object.assign(new Schedule(), schedule))
    );
  }

  clearForm(): void{
    this.scheduleForm.reset();
    this.editModel = {};
  }

}
