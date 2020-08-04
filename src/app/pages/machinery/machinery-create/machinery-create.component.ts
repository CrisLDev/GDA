import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MachineryService } from '@app/core/services/machinery.service';
import { Store } from '@ngrx/store';
import { MachineryState } from '@app/core/ngrx/reducers/machinery.reducer';
import * as fromActions from '@core/ngrx/actions/machinery.actions'

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-machinery-create',
  templateUrl: './machinery-create.component.html',
  styleUrls: ['./machinery-create.component.css']
})
export class MachineryCreateComponent implements OnInit {

  machineryForm: FormGroup;

  file: File;

  photoSelected: string | ArrayBuffer;

  constructor(
              private machineryService: MachineryService,
              private store: Store<MachineryState>,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(){
    this.machineryForm = this.fb.group({
      name: [''],
      brand: [''],
      weight: [''],
      status: [''],
      description: [''],
      image: ['']
    })
  }

  onSubmit(){
    this.machineryForm.value.image = this.file;
    this.store.dispatch(fromActions.createMachinery({machinery: this.machineryForm.value}));
    this.machineryForm.reset();
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
