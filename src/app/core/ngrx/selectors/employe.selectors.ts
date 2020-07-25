import { employeKey, EmployeState, selectAll } from '../reducers/employe.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectEmployeState = createFeatureSelector<EmployeState>(
  employeKey
);

export const selectEmployes = createSelector(selectEmployeState, selectAll);

export const selectedEmployes = createSelector(
  selectEmployeState, 
  (state: EmployeState) => state.selectedEmploye
);