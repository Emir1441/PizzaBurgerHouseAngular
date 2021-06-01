import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderConfirmation, Product } from '../models/model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  products: Product[];
  constructor(private http: HttpClient) { }
  deliveryOrderSubmit(order: Order) {
    this.http.post<OrderConfirmation>(`${environment.ApiUrl}/api/order/`, {
      customerName: order.customerName,
      customerPhoneNumber: order.customerPhoneNumber,
      customerEmail: order.customerEmail,
      deliveryOrder: order.deliveryOrder,
      paymentMethod: order.paymentMethod,
      products: order.products,
    }).subscribe(data => {
      console.log(data)
      order.orderConfirmation = data
      order.cart.clear();

    });
  }
}