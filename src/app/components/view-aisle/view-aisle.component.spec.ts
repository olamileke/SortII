import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAisleComponent } from './view-aisle.component';

describe('ViewAisleComponent', () => {
  let component: ViewAisleComponent;
  let fixture: ComponentFixture<ViewAisleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAisleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAisleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
