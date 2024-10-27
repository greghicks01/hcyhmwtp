import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgeChangeComponent } from './acknowledge-change.component';

describe('AcknowledgeChangeComponent', () => {
  let component: AcknowledgeChangeComponent;
  let fixture: ComponentFixture<AcknowledgeChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgeChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcknowledgeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
