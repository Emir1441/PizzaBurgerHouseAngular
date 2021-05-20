import { Component } from '@angular/core';


import { Cart } from 'src/app/models/cart.model';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})

export class MainLayoutComponent {
  isCollapsed = true;
  categories = []



  constructor(private cart: Cart, public categoryService: CategoryService) { }

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
