import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Schedule } from '@app/shared/classes/Schedules/Schedules';
import * as ScheduleActions from '@core/ngrx/actions/schedule.actions'

export const scheduleFeatureKey = 'schedule';

export interface ScheduleState extends EntityState<Schedule>{
  error: any;
}

export const adapter: EntityAdapter<Schedule> = createEntityAdapter<Schedule>({
  selectId: (schedule: Schedule) => schedule._id
});

export const initialState = adapter.getInitialState({
  error: undefined
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
  })
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

