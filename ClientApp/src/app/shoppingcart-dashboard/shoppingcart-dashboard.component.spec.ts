import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartDashboardComponent } from './shoppingcart-dashboard.component';

describe('ShoppingcartDashboardComponent', () => {
  let component: ShoppingcartDashboardComponent;
  let fixture: ComponentFixture<ShoppingcartDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
