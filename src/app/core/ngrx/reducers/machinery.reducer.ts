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


export const reducer = createReducer(
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
  )
);

