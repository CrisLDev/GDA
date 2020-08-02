import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

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
