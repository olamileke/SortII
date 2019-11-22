import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAisleComponent } from './add-aisle.component';

describe('AddAisleComponent', () => {
  let component: AddAisleComponent;
  let fixture: ComponentFixture<AddAisleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAisleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAisleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
