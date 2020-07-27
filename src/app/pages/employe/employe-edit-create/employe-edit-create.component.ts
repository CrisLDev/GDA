import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeService } from '@app/core/services/employe/employe.service';
import { Store } from '@ngrx/store';
import { EmployeState } from '@app/core/ngrx/reducers/employe.reducer';
import * as fromActions from '@core/ngrx/actions/employe.actions'
import { Employe } from '@app/shared/interfaces/Employes/Employe';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-employe-edit-create',
  templateUrl: './employe-edit-create.component.html',
  styleUrls: ['./employe-edit-create.component.css']
})
export class EmployeEditCreateComponent implements OnInit {

  employeForm: FormGroup;

  file: File;

  photoSelected: string | ArrayBuffer;

  @Input() employe: Employe;

  constructor(private employeService: EmployeService, private store: Store<EmployeState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(){
    this.employeForm = this.fb.group({
      name: [''],
      last: [''],
      profile: [''],
      age: [''],
      dni: [''],
      direction: [''],
      email: [''],
      date: [''],
      city: ['']
    })
  }

  onSubmit(){
    this.employeForm.value.profile = this.file;
    this.store.dispatch(fromActions.createEmploye({employe: this.employeForm.value}));
    this.employeForm.reset();
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
