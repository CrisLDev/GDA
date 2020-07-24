import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';

import * as EmployeActions from '../actions/employe.actions';
import {map, concatMap, catchError} from 'rxjs/operators';
import {EmployeService} from '@core/services/employe/employe.service';

@Injectable()
export class EmployeEffects {

  constructor(private actions: Actions,
              private employeService: EmployeService) {}

  // Get Employes
  loadEmployesEffect$ = createEffect(() => this.actions.pipe(
      ofType(EmployeActions.getEmployes),
      concatMap(() =>
        this.employeService.getEmployes()
          .pipe(
            map(res => EmployeActions.getEmployesSuccess({employes: res.employes})),
            catchError(error =>
              of(EmployeActions.getEmployesFailure({error: error.message}))
            )
          )
        )
      )
    )

}
