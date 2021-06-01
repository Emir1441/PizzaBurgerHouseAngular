import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.ApiUrl}/api/products/`)
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.ApiUrl}/api/products/${id}`)
  }

  addProduct(product): Observable<any> {
    return this.http.post<any>(`${environment.ApiUrl}/api/products/`, product)
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.ApiUrl}/api/products/${id}`)
  }

  editProduct(product): Observable<Product> {
    return this.http.patch<Product>(`${environment.ApiUrl}/api/products/`, product)
  }

  addImage(image): Observable<number> {
    return this.http.post<number>(`${environment.ApiUrl}/api/products/upload/`, image)
  }
}