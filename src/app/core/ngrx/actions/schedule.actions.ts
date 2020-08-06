import { createAction, props } from '@ngrx/store';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';
import { Update } from '@ngrx/entity';

// Get Schedules
export const getSchedules = createAction(
  '[Schedule List Component] Get all Schedules'
);

export const getSchedulesSuccess = createAction(
  '[Schedules Effect Success] Get All Schedules Success',
  props<{ schedules: Schedule[] }>()
);

export const getSchedulesFailure = createAction(
  '[Schedules Effect Failure] Get All Schedules Failure',
  props<{ error: any }>()
);

// Get Schedule
export const getSchedule = createAction(
  '[Schedule Component] Get Schedule',
  props<{id: string}>()
);

export const getScheduleSuccess = createAction(
  '[Schedule Effect Success] Get Schedule Success',
  props<{selectedSchedule: Schedule}>()
);

export const getScheduleFailure = createAction(
  '[Schedule Effect Success] Get Schedule Failure',
  props<{error: any}>()
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

// Edit Schedule
export const editSchedule = createAction(
  '[Schedule Edit Effect] Schedule Edit',
  props<{schedule: Update<Schedule>}>()
);