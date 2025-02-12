import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteOthersComponent } from './invite-others.component';

describe('InviteOthersComponent', () => {
  let component: InviteOthersComponent;
  let fixture: ComponentFixture<InviteOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteOthersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
