import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStewardsComponent } from './view-stewards.component';

describe('ViewStewardsComponent', () => {
  let component: ViewStewardsComponent;
  let fixture: ComponentFixture<ViewStewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
