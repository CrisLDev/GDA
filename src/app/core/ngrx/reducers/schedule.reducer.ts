import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';
import * as ScheduleActions from '@core/ngrx/actions/schedule.actions'

export const scheduleFeatureKey = 'schedule';

export interface ScheduleState extends EntityState<Schedule>{
  error: any;
  selectedSchedule: Schedule;
}

export const adapter: EntityAdapter<Schedule> = createEntityAdapter<Schedule>({
  selectId: (schedule: Schedule) => schedule._id
});

export const initialState = adapter.getInitialState({
  error: undefined,
  selectedSchedule: undefined
});


export const scheduleReducer = createReducer(
  initialState,
  // Create Schedule
  on(ScheduleActions.createScheduleSuccess, (state, action) =>
    adapter.addOne(action.schedule, state)
  ),
  on(ScheduleActions.createScheduleFailure, (state, action) =>{
    return {
      ...state,
      error: action.error
    }
  }),

  // Get all schedules
  on(ScheduleActions.getSchedulesSuccess, (state, action) =>
    adapter.addAll(action.schedules, state)
  ),
  on(ScheduleActions.getSchedulesFailure, (state, action) =>{
    return {
      ...state,
      error: action.error
    }
  }),

  // Edit Schedule
  on(ScheduleActions.updateSchedule, (state, action) =>
    adapter.updateOne(action.schedule, state)
  ),

  // Get Schedule
  on(ScheduleActions.getScheduleSuccess, (state, action) =>{
      return{
        ...state,
        selectedSchedule: action.selectedSchedule
      }
    }
  ),
  on(ScheduleActions.getScheduleFailure, (state, action) =>{
      return{
        ...state,
        error: action.error
      }
    }
  ),
);

export function reducer(state: ScheduleState | undefined, action: Action){
  return scheduleReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

