import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRealisedComponent } from './payment-realised.component';

describe('PaymentRealisedComponent', () => {
  let component: PaymentRealisedComponent;
  let fixture: ComponentFixture<PaymentRealisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRealisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRealisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
