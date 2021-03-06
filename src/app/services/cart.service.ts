import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartLine, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartProducts: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;







  constructor() { }





  addProductToCart(product: Product, quantity: number = 1, totalPrice: number = 0) { ///...............
    let cartProduct = this.cartProducts.find(line => line.product.id == product.id); // Разобраться с

    if (cartProduct != undefined) {
      cartProduct.quantity += quantity;
    } else {
      this.cartPrice = product.price * quantity;
      this.cartProducts.push(new CartLine(product, quantity, this.cartPrice));
    }
    this.recalculate();
  }


  updateQuantity(product: Product, quantity: number) {
    let line = this.cartProducts.find(line => line.product.id == product.id);
    if (line != undefined) {
      line.quantity = Number(quantity);


    }
    this.recalculate();
  }


  removeLine(id: number) {
    let index = this.cartProducts.findIndex(line => line.product.id == id);
    this.cartProducts.splice(index);
    this.recalculate();
  }


  clear() {
    this.cartProducts = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }


  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.cartProducts.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.product.price);

    })
  }



}














  //-------------------------------------------------------------------






  // addProductToCart(product) {
  //   this.cartProducts.push(product)
  // }





  //-------------------------------------------------------------------



