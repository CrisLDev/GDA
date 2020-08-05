import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeState } from '@app/core/ngrx/reducers/employe.reducer';
import { Store, select } from '@ngrx/store';
import { EmployeService } from '@app/core/services/employe/employe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { selectedEmploye } from '@app/core/ngrx/selectors/employe.selectors';
import * as fromActions from "@core/ngrx/actions/employe.actions";
import { Employe } from "@app/shared/classes/Employes/Employe";
import { Update } from '@ngrx/entity';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-employe-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.css']
})
export class EmployeEditComponent implements OnInit {

  employeEditForm: FormGroup;

  constructor(private fb: FormBuilder,
    private store: Store<EmployeState>,
    private route: ActivatedRoute,
    private router: Router,
    private service: EmployeService) { }

    model: any = {};

    file: File;

    photoSelected: string | ArrayBuffer;

  private createForm(){
    this.employeEditForm = this.fb.group({
      name: [''],
      last: [''],
      position: [''],
      profile: [''],
      age: [''],
      dni: [''],
      direction: [''],
      email: [''],
      date: [''],
      city: ['']
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.store.dispatch(
      fromActions.getEmploye({ id: this.route.snapshot.paramMap.get("id") })
    );

    this.store
      .pipe(select(selectedEmploye))
      .subscribe(
        employe => (this.model = Object.assign(new Employe(), employe))
      );
  }

  onSubmit(){
    const update: Update<Employe> = {
      id: this.model._id,
      changes: this.model,

    };

    if(this.file){
      update.changes.profile = this.file;
    }

    console.log(update.changes);

    this.store.dispatch(fromActions.updateEmploye({ employe: update }));
  }

  // Verificando si estan subiendo 1 foto

  onPhotoSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      // Image Preview
      const reader = new FileReader();
      reader.onload =e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

}
