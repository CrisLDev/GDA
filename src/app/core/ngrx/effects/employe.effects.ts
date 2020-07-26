import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as EmployeActions from '../actions/employe.actions';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {EmployeService} from '@core/services/employe/employe.service';

@Injectable()
export class EmployeEffects {

  constructor(private actions: Actions,
              private employeService: EmployeService) {}

  // Get Employes
  loadEmployes$ = createEffect(() => 
  this.actions.pipe(
      ofType(EmployeActions.getEmployes),
      mergeMap(action =>
        this.employeService.getEmployes().pipe(
            map(employes => EmployeActions.getEmployesSuccess({employes})),
            catchError(error =>
              of(EmployeActions.getEmployesFailure({error}))
            )
          )
        )
      )
    );

    // Get Employe
  loadEmploye$ = createEffect(() => 
  this.actions.pipe(
      ofType(EmployeActions.getEmploye),
      mergeMap(action =>
        this.employeService.getEmploye(action.id).pipe(
            map(employe => EmployeActions.getEmployeSuccess({selectedEmploye:employe})),
            catchError(error =>
              of(EmployeActions.getEmployeFailure({error}))
            )
          )
        )
      )
    );

    // Create Employe
    createEmploye$ = createEffect(() =>
      this.actions.pipe(
        ofType(EmployeActions.createEmploye),
        mergeMap(action =>
          this.employeService.createEmploye(action.employe).pipe(
            map(employe => EmployeActions.createEmployeSuccess({employe})),
            catchError(error =>
              of(EmployeActions.createEmployeFailure({error})))
          )
        )
      )
    );

}
