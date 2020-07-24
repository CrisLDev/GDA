import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeActions from '../actions/employe.actions';
import {Employe} from '@shared/interfaces/Employes/Employe';

export interface EmployeState {
  employes: Employe[];
  error: any;
}

export const initialState: EmployeState = {
  employes: undefined,
  error: null
};


const featureReducer = createReducer(
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

