import { createFeatureSelector, createSelector } from '@ngrx/store';
import { machineryFeatureKey, MachineryState, selectAll } from '../reducers/machinery.reducer';

export const selectMachineryState = createFeatureSelector<MachineryState>(
    machineryFeatureKey
);

export const selectMachineries = createSelector(selectMachineryState, selectAll);