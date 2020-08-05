import { createAction, props } from '@ngrx/store';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';

// Get Schedules
export const loadSchedules = createAction(
  '[Schedule Component] get Schedules'
);

export const loadSchedulesSuccess = createAction(
  '[Schedule] Load Schedules Success',
  props<{ data: any }>()
);

export const loadSchedulesFailure = createAction(
  '[Schedule] Load Schedules Failure',
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
