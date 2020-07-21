import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeEditCreateComponent } from './employe-edit-create.component';

describe('EmployeEditCreateComponent', () => {
  let component: EmployeEditCreateComponent;
  let fixture: ComponentFixture<EmployeEditCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeEditCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
