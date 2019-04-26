import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Order } from './models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public httpClient:HttpClient;
  public url:string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.httpClient=http;
    this.url=baseUrl + 'api/ShoppingCartDashboard';
  }

  getOrders():Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.url+'/Orders');
  }

  getOrder(id:number):Observable<Order>{
    return this.httpClient.get<Order>(this.url+'/Order/'+id);
  }
}
