import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCrackingComponent } from './get-cracking.component';

describe('GetCrackingComponent', () => {
  let component: GetCrackingComponent;
  let fixture: ComponentFixture<GetCrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
