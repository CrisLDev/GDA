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
  loadEmployesEffect$ = createEffect(() => 
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

}
