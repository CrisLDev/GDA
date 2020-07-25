import { createAction, props } from '@ngrx/store';
import { Employe } from "@shared/interfaces/Employes/Employe";

export const getEmployes = createAction(
  '[Employe API] Get Employes'
);

export const getEmployesSuccess = createAction(
  '[Employe Effect] Get Employes Success',
  props<{ employes: Employe[] }>()
);

export const getEmployesFailure = createAction(
  '[Employe Effect] Get Employes Failure',
  props<{ error: any }>()
);
