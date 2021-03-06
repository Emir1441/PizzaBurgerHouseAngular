import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

import { PruductService } from '../services/pruduct.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']

})
export class CartComponent implements OnInit {

  // cartProduct: Product[];
  // public totalPrice = 0;
  // counter: number = 0;
  // quantity: number = 0;
  // selected: null;


  constructor(public cartService: CartService, private productService: PruductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Cart Products', this.cartService);




  }



  sendOrder(product) {
    // console.log(product)
    console.log('Total Price in Service', product)
  }



  // addToCart(product) {
  //   console.log(product)
  // }






  //-------------------------------------------------------------------------------------------------
}

 //-------------------------------------------------------------------------------------------------


// ngOnInit(): void {





//   this.cartProducts = this.cartService.cartProducts;
//   for (let i = 0; i < this.cartProducts.length; i++) {
//     this.totalPrice = +this.cartProducts[i].price;
//     console.log("NgOnit", this.totalPrice)
//   }

// }

// deleteProductInCart(product) {
//   this.cartProducts.splice(this.cartProducts.indexOf(product), 1)

// }


// addOrder(product) {
//   console.log(product);
// }



// increase() {
//   this.counter++;
//   for (let i = 0; i < this.cartProducts.length; i++) {
//     this.totalPrice += +this.cartProducts[i].price
//   }


// }

// decrease() {
//   this.counter--;
//   for (let i = 0; i < this.cartProducts.length; i++) {
//     this.totalPrice -= +this.cartProducts[i].price
//   }


//   //-------------------------------------------------------------------------------------------------

// }
// }





 // this.cartProduct = this.cartService.cartProducts;
    // console.log('Cart Products', this.cartProduct);


    // for (let i = 1; i < this.cartProduct.length; i++) {
    //   this.totalPrice = Number(this.cartProduct[i].price) * Number(this.quantity[i]);
    //   console.log("NgOnit", this.totalPrice)
    // }


    // this.cartProduct.forEach(item => {
    //   this.totalPrice = Number(this.quantity) * Number(item.price)
    // })
    // console.log("forEach", this.totalPrice)
