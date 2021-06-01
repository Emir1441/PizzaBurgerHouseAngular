import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeliveryOrder } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  getDeliveryOrders(): Observable<DeliveryOrder[]> {
    return this.http.get<DeliveryOrder[]>(`${environment.ApiUrl}/api/order/`)
  }
  getOrderId(id: number): Observable<DeliveryOrder> {
    return this.http.get<DeliveryOrder>(`${environment.ApiUrl}/api/order/${id}`)
  }
}