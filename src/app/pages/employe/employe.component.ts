import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Employe } from "@shared/interfaces/Employes/Employe";
import { EmployeService } from "@core/services/employe/employe.service";
import { Store, select } from "@ngrx/store";
import { EmployeState } from "@core/ngrx/reducers/employe.reducer";
import * as fromActions from "@core/ngrx/actions/employe.actions";
import {
  selectEmployes,
  selectedEmploye,
} from "@app/core/ngrx/selectors/employe.selectors";

@Component({
  selector: "app-employe",
  templateUrl: "./employe.component.html",
  styleUrls: ["./employe.component.css"],
})
export class EmployeComponent implements OnInit {
  employes$: Observable<Employe[]>;

  employe$: Observable<Employe>;

  loaded = false;

  constructor(
    private employeService: EmployeService,
    public router: Router,
    private store: Store<EmployeState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fromActions.getEmployes());
    this.getEmployes();
  }

  getEmployes() {
    this.employes$ = this.store.pipe(select(selectEmployes));
  }

  getEmploye(employe: Employe) {
    this.store.dispatch(fromActions.getEmploye({ id: employe._id }));

    this.employe$ = this.store.pipe(select(selectedEmploye));
  }

  goToEditar(tabName: string, employe: Employe) {
    this.getEmploye(employe);
    for (
      let i = 0;
      i < document.querySelectorAll(".mat-tab-label-content").length;
      i++
    ) {
      if (
        (<HTMLElement>document.querySelectorAll(".mat-tab-label-content")[i])
          .innerText == tabName
      ) {
        (<HTMLElement>document.querySelectorAll(".mat-tab-label")[i]).click();
      }
    }
  }
}
