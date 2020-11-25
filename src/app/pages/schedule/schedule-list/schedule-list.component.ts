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
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  machineries$: Observable<Machinery[]>;

  employes$: Observable<Employe[]>;

  schedules$: Observable<Schedule[]>;

  editModel: any = {
    _id: "",
    name: "",
    employe_id: {
      _id: "",
      name:"",
    },
    machinery_id: {
      _id: "",
      name:"",
    },
    startDate: "",
    endDate: "",
    place: "",
    description: ""
  };

  scheduleForm: FormGroup;

  employeName: string;

  machineryName: string;

  employess;

  selectedEmploye: any = {};

  selectedMachinery: any = {};

  constructor(
              private fb: FormBuilder,
              private storeMachinery: Store<MachineryState>,
              private storeEmploye: Store<EmployeState>,
              private store: Store<ScheduleState>,
              private snackBar: MatSnackBar
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
      employe_id: [this.editModel.employe_id._id || ''],
      machinery_id: [this.editModel.machinery_id._id || ''],
      name: [this.editModel.name || ''],
      description: [this.editModel.description || ''],
      place: [this.editModel.place || ''],
      startDate: [this.editModel.startDate || ''],
      endDate: [this.editModel.endDate || '']
    })
  }

  get f() { return this.scheduleForm.controls; }

  onSubmit(idExist: string){
    if(idExist){
      const update: Update<Schedule> = {
        id: this.editModel._id,
        changes: this.scheduleForm.value,
      };

      const employe = {
        _id: this.selectedEmploye._id,
        name: this.selectedEmploye.name
      }

      const machinery = {
        _id: this.selectedMachinery._id,
        name: this.selectedMachinery.name
      }

      update.changes.employe_id = employe;

      update.changes.machinery_id = machinery;
  
      this.store.dispatch(fromActions.updateSchedule({ schedule: update }));
      this.scheduleForm.reset();
      this.scheduleForm.markAsUntouched();
      this.snackBar.open('Horario editado correctamente.', 'Cerrar', {
        duration: 2000
      });
    }else{
      if(this.scheduleForm.valid){
        this.store.dispatch(fromActions.createSchedule({schedule: this.scheduleForm.value}));
        this.scheduleForm.reset();
        this.scheduleForm.markAsUntouched();
        this.snackBar.open('Horario creado correctamente.', 'Cerrar', {
          duration: 2000
        });
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

  refillForm(schedule_id: string, employeData, machineryData, schedule){
    this.store.dispatch(fromActions.getSchedule({id: schedule_id}));

    this.store.pipe(select(selectedSchedule)).subscribe(schedule => (this.editModel = Object.assign(new Schedule(), schedule))
    );

    this.selectedMachinery = {
      _id: machineryData._id,
      name: machineryData.name
    }

    this.selectedEmploye = {
      _id: employeData._id,
      name: employeData.name
    }

      this.scheduleForm.patchValue({
        name: schedule.name,
        employe_id: schedule.employe_id._id,
        machinery_id: schedule.machinery_id._id,
        place: schedule.place,
        startDate: schedule.startDate,
        endDate: schedule.endDate,
        description: schedule.description,
      })
  }

  clearForm(): void{
    this.scheduleForm.reset();
  }

  addEmploye(event){
    this.selectedEmploye = {
      _id: event.value,
      name: event.source.triggerValue
    }
  }

  addMachinery(event){
    this.selectedMachinery = {
      _id: event.value,
      name: event.source.triggerValue
    }
  }

}
