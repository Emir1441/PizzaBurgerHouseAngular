import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.css']
})
export class PizzaPageComponent implements OnInit {

  apiUrl: string = environment.ApiUrl;
  products: Product[];
  spinner = false
  constructor(private productService: ProductService, public cart: Cart, private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.spinner = true
    this.categoryService.getProductByIdCategory(1).subscribe(res => {
      console.log(this.products = res)
      this.spinner = false
    })
  }
  addCart(product) {
    this.cart.addProduct(product)
  }
}