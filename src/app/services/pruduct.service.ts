import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class PruductService {

  // apiUrl: string = 'https://localhost:44348/api/home'  https://localhost:44348/api/home/;
  apiUrl: string = 'https://localhost:44320/api/products/';
  // cartProducts: Product[] = [];


  constructor(private http: HttpClient) { }






  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }



  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`https://localhost:44320/api/products/${id}`)

  }


  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('https://localhost:44320/api/products/', product)


  }


  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:44320/api/products/${id}`)
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>('https://localhost:44320/api/products/', product)
  }



  // addProductToCart(product) {
  //   this.cartProducts.push(product)

  // }




























}
