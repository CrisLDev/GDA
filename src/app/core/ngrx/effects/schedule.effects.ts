import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ScheduleService } from "@app/core/services/schedule/schedule.service";
import { Router } from "@angular/router";
import * as ScheduleActions from "@core/ngrx/actions/schedule.actions";
import { mergeMap, catchError, map, tap, concatMap } from "rxjs/operators";
import { of } from "rxjs";

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
            ScheduleActions.createScheduleSuccess({ schedule })
          ),
          catchError((error) =>
            of(ScheduleActions.createScheduleFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate["/horarios"])
    )
  );

  // Get All Schedules
  loadSchedules$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.getSchedules),
      mergeMap((action) =>
        this.scheduleService.getSchedules().pipe(
          map((schedules) =>
            ScheduleActions.getSchedulesSuccess({ schedules })
          ),
          catchError((error) =>
            of(ScheduleActions.getSchedulesFailure({ error }))
          )
        )
      )
    )
  );

  // Edit Schedule
  editSchedule$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ScheduleActions.updateSchedule),
        concatMap((action) =>
          this.scheduleService.editSchedule(
            action.schedule.id,
            action.schedule.changes
          )
        ),
        tap(() => this.router.navigate(["/horarios"]))
      ),
    { dispatch: false }
  );

  // Get Schedule
  loadSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.getSchedule),
      mergeMap((action) =>
        this.scheduleService.getSchedule(action.id).pipe(
          map((schedule) =>
            ScheduleActions.getScheduleSuccess({ selectedSchedule: schedule })
          ),
          catchError((error) =>
            of(ScheduleActions.getScheduleFailure({ error }))
          )
        )
      )
    )
  );
}
