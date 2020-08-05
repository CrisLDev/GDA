import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MachineryService } from '@app/core/services/machinery/machinery.service';
import { MachineryState } from '@app/core/ngrx/reducers/machinery.reducer';
import { Store, select } from '@ngrx/store';
import * as fromActions from '@core/ngrx/actions/machinery.actions';
import { ActivatedRoute } from '@angular/router';
import { selectedMachinery } from '@app/core/ngrx/selectors/machinery.selectors';
import { Update } from '@ngrx/entity';
import { Machinery } from '@app/shared/clases/Machinery/Machinery';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-machinery-edit',
  templateUrl: './machinery-edit.component.html',
  styleUrls: ['./machinery-edit.component.css']
})
export class MachineryEditComponent implements OnInit {

  machineryEditForm: FormGroup;

  file: File;

  photoSelected: string | ArrayBuffer;

  model: any = {};

  constructor(
              private machineryService: MachineryService,
              private store: Store<MachineryState>,
              private fb: FormBuilder,
              private route: ActivatedRoute
  ) { }

  private createForm(){
    this.machineryEditForm = this.fb.group({
      name: [''],
      brand: [''],
      weight: [''],
      status: [''],
      description: [''],
      image: ['']
    })
  }

  ngOnInit(): void {
    this.createForm();
    this.store.dispatch(
      fromActions.getMachinery({id: this.route.snapshot.paramMap.get("id")})
    );

    this.store.pipe
      (select(selectedMachinery)).subscribe
      (machinery => (this.model = Object.assign(new Machinery(), machinery)))
  }

  onSubmit(){
    const update: Update<Machinery> = {
      id: this.model._id,
      changes: this.model
    };

    if(this.file){
      update.changes.image = this.file
    }

    this.store.dispatch(fromActions.updateMachinery({machinery: update}))
  }

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
