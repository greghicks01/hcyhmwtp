import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveInstanceComponent } from './leave-instance.component';

describe('LeaveInstanceComponent', () => {
  let component: LeaveInstanceComponent;
  let fixture: ComponentFixture<LeaveInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveInstanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
