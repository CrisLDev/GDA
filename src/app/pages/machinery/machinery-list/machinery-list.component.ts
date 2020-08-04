import { Component, OnInit } from '@angular/core';
import {Machinery} from '@shared/clases/Machinery/Machinery';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MachineryState } from '@app/core/ngrx/reducers/machinery.reducer';
import { selectMachineries } from '@app/core/ngrx/selectors/machinery.selectors';
import * as fromActions from '@core/ngrx/actions/machinery.actions';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.component.html',
  styleUrls: ['./machinery-list.component.css']
})
export class MachineryListComponent implements OnInit {

  machineries$: Observable<Machinery[]>;

  constructor(
              private store: Store<MachineryState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActions.getMachineries());
    this.getMachineries();
  }

  getMachineries(){
    this.machineries$ = this.store.pipe(select(selectMachineries));
  }

}
