import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as EmployeActions from '../actions/employe.actions';
import {Employe} from '@shared/interfaces/Employes/Employe';

export const employeKey = "employeState";

export interface EmployeState {
  employes: Employe[];
  error: any;
};

export const initialState: EmployeState = {
  employes: undefined,
  error: undefined
};


export const reducer = createReducer(
  initialState,
  // Get Employes
    on(EmployeActions.getEmployesSuccess, (state, action) => {
      return {
        employes: action.employes
      }
    }
  ),
  on(EmployeActions.getEmployesFailure, (state, action) => {
    return {
      employes: state.employes,
      error: action.error
    }
  }
)
);

export const selectEmployesFeature = createFeatureSelector<EmployeState>(
  employeKey
);

export const selectEmployes = createSelector(
  selectEmployesFeature,
  (state: EmployeState) => state.employes
);