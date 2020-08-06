import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ScheduleState, scheduleFeatureKey, selectAll } from '../reducers/schedule.reducer';

export const selectScheduleState = createFeatureSelector<ScheduleState>(
    scheduleFeatureKey
);

export const selectSchedules = createSelector(selectScheduleState, selectAll);

export const selectedSchedule = createSelector(selectScheduleState,
    (state: ScheduleState) => state.selectedSchedule
);