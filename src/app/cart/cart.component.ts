import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart.model';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  delivery
  apiUrl: string = environment.ApiUrl;
  constructor(public cart: Cart, public order: Order, private router: Router,) {
    if (order.products.length == 0) {
      this.router.navigateByUrl("/pizza");
    }
  }
}
