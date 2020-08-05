import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Machinery } from '@app/shared/clases/Machinery/machinery';
import * as MachineryActions from '@core/ngrx/actions/machinery.actions';


export const machineryFeatureKey = 'machinery';

export interface MachineryState extends EntityState<Machinery> {
  error: any;
  selectedMachinery: Machinery;
}

export const adapter: EntityAdapter<Machinery> = createEntityAdapter<Machinery>({
  selectId: (machinery: Machinery) => machinery._id
});

export const initialState = adapter.getInitialState({
  error: undefined,
  selectedMachinery: undefined
});


export const machineryReducer = createReducer(
  initialState,
  // Create Macinery
  on(MachineryActions.createMachinerySuccess, (state, action) => 
    adapter.addOne(action.machinery, state)
  ),
  on(MachineryActions.createMachineryFailure, (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),

  // Get machineries
  on(MachineryActions.getMachineriesSuccess, (state, action) => 
    adapter.addAll(action.machineries, state)
  ),
  on(MachineryActions.getMachineriesFailure, (state, action) =>{
      return {
        ...state,
        error: action.error
      }
    }
  ),

  // Get Machinery
  on(MachineryActions.getMachinerySuccess, (state, action) =>{
    return{
      ...state,
      selectedMachinery: action.selectedMachinery
    }
  }
  ),
  on(MachineryActions.getMachineryFailure, (state, action) =>{
    return{
      ...state,
      error: action.error
    }
  }
  ),

  // Edit Machinery
  on(MachineryActions.updateMachinery, (state, action) =>
    adapter.updateOne(action.machinery, state)
  ),

  // Delete Machinery
  on(MachineryActions.deleteMachinerySuccess, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(MachineryActions.deleteMachineryFailure, (state, action) =>{
    return{
      ...state,
      error: action.error
    }
  }
  )
);

export function reducer(state: MachineryState | undefined, action: Action){
  return machineryReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

