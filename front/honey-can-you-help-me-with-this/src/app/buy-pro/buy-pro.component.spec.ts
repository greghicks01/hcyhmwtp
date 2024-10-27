import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProComponent } from './buy-pro.component';

describe('BuyProComponent', () => {
  let component: BuyProComponent;
  let fixture: ComponentFixture<BuyProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
