import { Order } from './../models/order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-shoppingcart-dashboard',
  templateUrl: './shoppingcart-dashboard.component.html',
  styleUrls: ['./shoppingcart-dashboard.component.css']
})
export class ShoppingcartDashboardComponent implements OnInit {
  public orders:Order[];
  name:string;
  selectedOrder:Order;

  constructor(orderService:OrderService) { 
    orderService.getOrders().subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

  viewOrder(order:Order){
    this.selectedOrder=order;
  }

}
