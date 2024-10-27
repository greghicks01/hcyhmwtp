import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseInstanceComponent } from './close-instance.component';

describe('CloseInstanceComponent', () => {
  let component: CloseInstanceComponent;
  let fixture: ComponentFixture<CloseInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseInstanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
