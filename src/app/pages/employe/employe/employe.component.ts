import { Component, OnInit } from '@angular/core';
import { EmployeState } from '@app/core/ngrx/reducers/employe.reducer';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '@app/core/services/employe/employe.service';
import * as fromActions from "@core/ngrx/actions/employe.actions";
import { selectedEmploye } from '@app/core/ngrx/selectors/employe.selectors';
import { Observable } from 'rxjs';
import { Employe } from '@app/shared/clases/Employes/Employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employe$: Observable<Employe>;

  constructor(
    private store: Store<EmployeState>,
    private route: ActivatedRoute,
    private router: Router,
    private service: EmployeService) { }

  ngOnInit(): void {
    this.store.dispatch(
      fromActions.getEmploye({ id: this.route.snapshot.paramMap.get("id") })
    );

    this.employe$ = this.store.pipe(select(selectedEmploye));
  }

}
