import { createAction, props } from '@ngrx/store';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';

// Get Schedules
export const getSchedules = createAction(
  '[Schedule List Component] Get all Schedules'
);

export const getSchedulesSuccess = createAction(
  '[Schedule Effect Success] Get All Schedules Success',
  props<{ schedules: Schedule[] }>()
);

export const getSchedulesFailure = createAction(
  '[Schedule Effect Failure] Get All Schedules Failure',
  props<{ error: any }>()
);

// Create Schedules
export const createSchedule = createAction(
  '[Schedule Create Component] Create Schedule',
  props<{schedule: Schedule}>()
);

export const createScheduleSuccess = createAction(
  '[Schedule Create Effect Success] Schedule Create Success',
  props<{schedule: Schedule}>()
);

export const createScheduleFailure = createAction(
  '[Schedule Create Effect Failure] Schedule Create Failure',
  props<{error: any}>()
);
