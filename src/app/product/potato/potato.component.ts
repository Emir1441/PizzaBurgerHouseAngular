import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.css']
})
export class PotatoComponent {

  products: Product[];
  apiUrl: string = environment.ApiUrl;;

  constructor(private productService: ProductService, public cart: Cart) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productService.getAllProduct().subscribe(res => {
      console.log(this.products = res.filter(rez => rez.productType === 'Картошка'))
    })

  }
  addCart(product) {
    this.cart.addProduct(product)
  }

}
