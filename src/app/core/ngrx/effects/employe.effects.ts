import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as EmployeActions from '../actions/employe.actions';
import {map, mergeMap, catchError, tap, concatMap} from 'rxjs/operators';
import {EmployeService} from '@core/services/employe/employe.service';
import { Router } from '@angular/router';

@Injectable()
export class EmployeEffects {

  constructor(private actions: Actions,
              private employeService: EmployeService,
              private router: Router) {}

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
        ),
      tap(() => this.router.navigate(['/empleados']))
      )
    );

    updateEmploye$ = createEffect(
      () =>
        this.actions.pipe(
          ofType(EmployeActions.updateEmploye),
          concatMap(action =>
            this.employeService.editEmploye(
              action.employe.id,
              action.employe.changes
            )
          ),
          tap(() => this.router.navigate(['/empleados']))
        ),
      { dispatch: false }
    );

}
