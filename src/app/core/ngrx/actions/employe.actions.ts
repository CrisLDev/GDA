import { createAction, props } from '@ngrx/store';
import { Employe } from "@shared/interfaces/Employes/Employe";
import { Update } from '@ngrx/entity';

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
  '[Employe Create & Edit Component] Get Employe',
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

// Create Employe
export const createEmploye = createAction(
  '[Employe Component] Create Employe',
  props<{employe: Employe}>()
);

export const createEmployeSuccess = createAction(
  '[Create Employe Effect Success] Create Employe Success',
  props<{ employe: Employe}>()
);

export const createEmployeFailure = createAction(
  '[Create Employe Effect Failure] Create Employe Failure',
  props<{error: any}>()
);

// Edit Component
export const updateEmploye = createAction(
  "[Employe Edit Component] Update Employe",
  props<{ employe: Update<Employe> }>()
);