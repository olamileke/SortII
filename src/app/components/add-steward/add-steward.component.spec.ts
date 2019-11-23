import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStewardComponent } from './add-steward.component';

describe('AddStewardComponent', () => {
  let component: AddStewardComponent;
  let fixture: ComponentFixture<AddStewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
