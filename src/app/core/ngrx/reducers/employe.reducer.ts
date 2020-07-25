import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as EmployeActions from '../actions/employe.actions';
import {Employe} from '@shared/interfaces/Employes/Employe';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

export const employeKey = "employeState";

export interface EmployeState extends EntityState<Employe> {
  error: any;
};

export const adapter: EntityAdapter<Employe> = createEntityAdapter<Employe>({
  selectId: (employes: Employe) => employes._id
});

export const initialState = adapter.getInitialState({
  error: undefined
});

export const reducer = createReducer(
  initialState,
  // Get Employes
    on(EmployeActions.getEmployesSuccess, (state, action) => {
      return adapter.addAll(action.employes, state)
    }),
  on(EmployeActions.getEmployesFailure, (state, action) => {
    return {
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
  adapter.getSelectors().selectAll
);

export const selectError = createSelector(
  selectEmployesFeature,
  (state: EmployeState) => state.error
);