//import { Observable } from 'rxjs';
import { OrderService } from './../order.service';
import { Order } from './../models/order';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() order:Order;
  constructor(private route:ActivatedRoute,
              private location:Location,
              private orderService:OrderService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.orderService.getOrder(id)
    .subscribe(order=>this.order=order);
  }

  goBack(){
    this.location.back();
  }

}
