import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/model';
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

  constructor(private productService: ProductService, public cart: Cart) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productService.getAllProduct().subscribe(res => {
      console.log(this.products = res.filter(rez => rez.productType === 'Соус'))
    })

  }
  addCart(product) {
    this.cart.addProduct(product)
  }

}
