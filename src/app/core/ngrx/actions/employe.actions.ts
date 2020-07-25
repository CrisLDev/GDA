import { createAction, props } from '@ngrx/store';
import { Employe } from "@shared/interfaces/Employes/Employe";

// Get all employes
export const getEmployes = createAction(
  '[Employes List Component] Get Employes'
);

export const getEmployesSuccess = createAction(
  '[Employes Effect Success] Get Employes Success',
  props<{ employes: Employe[] }>()
);

export const getEmployesFailure = createAction(
  '[Employes Effect Failure] Get Employes Failure',
  props<{ error: any }>()
);

// Get employe
export const getEmploye = createAction(
  '[Employe Component] Get Employe',
  props<{id: string}>()
);

export const getEmployeSuccess = createAction(
  '[Employe Effect Success] Get Employe Success',
  props<{ selectedEmploye: Employe}>()
);

export const getEmployeFailure = createAction(
  '[Employe Effect Failure] Get Employe Failure',
  props<{error: any}>()
);