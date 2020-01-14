import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftDoorsComponent } from './lift-doors.component';

describe('LiftDoorsComponent', () => {
  let component: LiftDoorsComponent;
  let fixture: ComponentFixture<LiftDoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LiftDoorsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
