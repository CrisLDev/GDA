import { Action, createReducer, on} from '@ngrx/store';
import * as EmployeActions from '../actions/employe.actions';
import {Employe} from '@app/shared/classes/Employes/Employe';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';

export const employeFeatureKey = "employe";

export interface EmployeState extends EntityState<Employe> {
  error: any;
  selectedEmploye: Employe;
};

export const adapter: EntityAdapter<Employe> = createEntityAdapter<Employe>({
  selectId: (employe: Employe) => employe._id,
  sortComparer: false
});

export const initialState = adapter.getInitialState({
  error: undefined,
  selectedEmploye: undefined
});

const employeReducer = createReducer(
  initialState,
  // Get Employes
  on(EmployeActions.getEmployesSuccess, (state, action) =>
    adapter.addAll(action.employes, state)),
  on(EmployeActions.getEmployesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }}
  ),
  // Get Employe
  on(EmployeActions.getEmployeSuccess, (state, action) => {
    return {
      ...state,
      selectedEmploye: action.selectedEmploye
    }}
  ),
  on(EmployeActions.getEmployeFailure,(state, action) => {
    return {
      ...state,
      error: action.error
    }}
  ),
  // Create Employe
  on(EmployeActions.createEmployeSuccess, (state, action) =>
    adapter.addOne(action.employe, state)
  ),
  on(EmployeActions.createEmployeFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(EmployeActions.updateEmploye, (state, action) =>
    adapter.updateOne(action.employe, state)
  ),
  on(EmployeActions.deleteEmployeSuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(EmployeActions.deleteEmployeFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  })
);

export function reducer(state: EmployeState | undefined, action: Action){
  return employeReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();