import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryEditComponent } from './machinery-edit.component';

describe('MachineryEditComponent', () => {
  let component: MachineryEditComponent;
  let fixture: ComponentFixture<MachineryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
