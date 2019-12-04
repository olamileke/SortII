import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardComponent } from './steward.component';

describe('StewardComponent', () => {
  let component: StewardComponent;
  let fixture: ComponentFixture<StewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
