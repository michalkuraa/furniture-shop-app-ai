import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddedComponent } from './product-added.component';

describe('ProductAddedComponent', () => {
  let component: ProductAddedComponent;
  let fixture: ComponentFixture<ProductAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
