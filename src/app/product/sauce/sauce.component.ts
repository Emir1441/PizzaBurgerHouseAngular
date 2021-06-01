import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sauce',
  templateUrl: './sauce.component.html',
  styleUrls: ['./sauce.component.css']
})
export class SauceComponent {

  products: Product[];
  apiUrl: string = environment.ApiUrl;
  spinner = false
  constructor(private productService: ProductService, public cart: Cart, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.spinner = true
    this.categoryService.getProductByIdCategory(3).subscribe(res => {
      console.log(this.products = res)
      this.spinner = false
    })
  }
  addCart(product) {
    this.cart.addProduct(product)
  }
}