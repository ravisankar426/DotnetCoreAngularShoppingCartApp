import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shoppingcart-dashboard',
  templateUrl: './shoppingcart-dashboard.component.html',
  styleUrls: ['./shoppingcart-dashboard.component.css']
})
export class ShoppingcartDashboardComponent implements OnInit {
  public orders:Order[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    http.get<Order[]>(baseUrl + 'api/ShoppingCartDashboard/Orders').subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Order{
  orderId: number,
  price: number,
  createdDate: Date,
  status: string
}
