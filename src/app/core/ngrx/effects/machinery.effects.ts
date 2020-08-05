import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MachineryService } from "@app/core/services/machinery/machinery.service";
import * as machineryActions from "@core/ngrx/actions/machinery.actions";
import { map, tap, mergeMap, catchError, concatMap } from "rxjs/operators";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class MachineryEffects {
  constructor(
    private actions$: Actions,
    private machineryService: MachineryService,
    private router: Router
  ) {}

  // Cretate Machinery
  createMachinery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(machineryActions.createMachinery),
      mergeMap((action) =>
        this.machineryService.createMachinery(action.machinery).pipe(
          map((machinery) =>
            machineryActions.createMachinerySuccess({ machinery })
          ),
          catchError((error) =>
            of(machineryActions.createMachineryFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate(["/maquinarias"]))
    )
  );

  // Get Machineries
  loadMachineries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(machineryActions.getMachineries),
      mergeMap((action) =>
        this.machineryService.getMachineries().pipe(
          map((machineries) =>
            machineryActions.getMachineriesSuccess({ machineries })
          ),
          catchError((error) =>
            of(machineryActions.getMachineriesFailure({ error }))
          )
        )
      )
    )
  );

  // Get Machinery
  loadMachinery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(machineryActions.getMachinery),
      mergeMap((action) =>
        this.machineryService.getMachinery(action.id).pipe(
          map((machinery) =>
            machineryActions.getMachinerySuccess({
              selectedMachinery: machinery,
            })
          ),
          catchError((error) =>
            of(machineryActions.getMachineryFailure({ error }))
          )
        )
      )
    )
  );

  // Update Machinery
  updateMachinery$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(machineryActions.updateMachinery),
        concatMap((action) =>
          this.machineryService.editMachinery(
            action.machinery.id,
            action.machinery.changes
          )
        ),
        tap(() => this.router.navigate(["/maquinarias"]))
      ),
    { dispatch: false }
  );

  // Delete Machinery
  deleteMachinery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(machineryActions.deleteMachinery),
      mergeMap((action) =>
        this.machineryService.deleteMachinery(action.id).pipe(
          map(() => machineryActions.deleteMachinerySuccess({ id: action.id })),
          catchError((error) =>
            of(machineryActions.deleteMachineryFailure({ error }))
          )
        )
      ),
      tap(() => this.router.navigate['/maquinarias'])
    )
  );
}
