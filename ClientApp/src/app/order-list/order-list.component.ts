import { OrderService } from './../order.service';
import { Order } from './../models/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  public orders:Order[];
  name:string;
  selectedOrder:Order;
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }

}
