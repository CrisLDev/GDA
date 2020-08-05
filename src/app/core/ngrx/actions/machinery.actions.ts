import { createAction, props } from '@ngrx/store';
import { Machinery } from '@app/shared/clases/Machinery/machinery';
import { Update } from '@ngrx/entity';

// Get all machineries
export const getMachineries = createAction(
  '[Machinery List Component] Get all Machineries'
);

export const getMachineriesSuccess = createAction(
  '[Machinery Effect] Get All Machineries Success',
  props<{ machineries: Machinery[] }>()
);

export const getMachineriesFailure = createAction(
  '[Machinery Effect] Get All Machineries Failure',
  props<{ error: any }>()
);

// Get Machinery
export const getMachinery = createAction(
  '[Machinery Create and Edit Component] Get Machinery',
  props<{id: string}>()
);

export const getMachinerySuccess = createAction(
  '[Machinery Effect Success] Get Machinery Success',
  props<{selectedMachinery: Machinery}>()
);

export const getMachineryFailure = createAction(
  '[Machinery Effects Failure] Get Machinery Failure',
  props<{error: any}>()
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

// Edit Machinery
export const updateMachinery = createAction(
  '[Machinery Edit Component] Update Machinery',
  props<{machinery: Update<Machinery>}>()
);

// Delete Machinery
export const deleteMachinery = createAction(
  '[Machinery Component] Delete Machinery',
  props<{id: string}>()
);

export const deleteMachinerySuccess = createAction(
  '[Machinery Effect Delete Success] Delete Machinery Success',
  props<{id: string}>()
);

export const deleteMachineryFailure = createAction(
  '[Machinery Effect Delete Failure] Delete Machinery Failure',
  props<{error: any}>()
);