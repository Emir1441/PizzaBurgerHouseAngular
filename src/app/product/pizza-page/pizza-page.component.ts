import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/model';
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

  constructor(private productService: ProductService, public cart: Cart) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe(res => {
      console.log(this.products = res.filter(rez => rez.productType === 'Пицца'))
    })
  }


  addCart(product) {
    this.cart.addProduct(product)
  }

}
