import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderProductListComponent } from './user-order-product-list.component';

describe('UserOrderProductListComponent', () => {
  let component: UserOrderProductListComponent;
  let fixture: ComponentFixture<UserOrderProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOrderProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
