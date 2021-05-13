import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent {


  ngOnInit(): void {
    this.getAllProducts();
  }

  products: Product[];
  apiUrl: string = environment.ApiUrl;

  constructor(private productService: ProductService, public cart: Cart) { }

  getAllProducts() {
    this.productService.getAllProduct().subscribe(res => {
      console.log(this.products = res.filter(rez => rez.productType === 'Напиток'))
    })

  }
  addCart(product) {
    this.cart.addProduct(product)
  }

}
