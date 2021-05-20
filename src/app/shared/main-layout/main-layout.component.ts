import { Component } from '@angular/core';


import { Cart } from 'src/app/models/cart.model';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})

export class MainLayoutComponent {
  isCollapsed = true;



  constructor(private cart: Cart) { }

  ngOnInit() {
  }
  images = ['./assets/image/slide/slideOne.jpg', './assets/image/slide/slideTwo.jpg', './assets/image/slide/slideThree.jpg']





  get itemCount(): number {
    return this.cart.itemCount;
  }

  get totalPrice(): number {
    return this.cart.totalPrice;
  }


}
