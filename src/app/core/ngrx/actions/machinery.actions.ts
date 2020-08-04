import { createAction, props } from '@ngrx/store';
import { Machinery } from '@app/shared/clases/Machinery/machinery';

// Get all machineries
export const getMachineries = createAction(
  '[Machinery List Component] Load Machinerys'
);

export const getMachinerysSuccess = createAction(
  '[Machinery] Load Machinerys Success',
  props<{ data: any }>()
);

export const getMachinerysFailure = createAction(
  '[Machinery] Load Machinerys Failure',
  props<{ error: any }>()
);

// Create machinery
export const createMachinery = createAction(
  '[Machinery component] Create Machiney',
  props<{machinery: Machinery}>()
);

export const createMachinerySuccess = createAction(
  '[Create Machinery Effect Success] Create Machinery Success',
  props<{machinery: Machinery}>()
);

export const createMachineryFailure = createAction(
  '[Create Machinery Effect Failure] Create Machinery Failure',
  props<{error: any}>()
);