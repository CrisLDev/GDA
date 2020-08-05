import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ScheduleService } from '@app/core/services/schedule/schedule.service';
import { Router } from '@angular/router';
import * as ScheduleActions from '@core/ngrx/actions/schedule.actions';
import { mergeMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ScheduleEffects {



  constructor(
              private actions$: Actions,
              private scheduleService: ScheduleService,
              private router: Router
  ) {}

  // Create Schedule
  createSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.createSchedule),
      mergeMap((action) =>
        this.scheduleService.createSchedule(action.schedule).pipe(
          map((schedule) => 
            ScheduleActions.createScheduleSuccess({schedule})
          ),
          catchError((error) =>
            of(ScheduleActions.createScheduleFailure({error}))
        )
      )
    ),
    tap(() => this.router.navigate['/horarios'])
  ));

}
