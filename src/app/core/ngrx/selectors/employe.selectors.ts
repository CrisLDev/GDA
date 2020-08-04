import { employeFeatureKey, EmployeState, selectAll } from '../reducers/employe.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectEmployeState = createFeatureSelector<EmployeState>(
  employeFeatureKey
);

export const selectEmployes = createSelector(selectEmployeState, selectAll);

export const selectedEmploye = createSelector(
  selectEmployeState, 
  (state: EmployeState) => state.selectedEmploye
);