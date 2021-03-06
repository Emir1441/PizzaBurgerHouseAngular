import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

import { PruductService } from '../services/pruduct.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[];
  // apiUrl: string = 'https://localhost:44348/';
  apiUrl: string = 'https://localhost:44320/';

  constructor(private productService: PruductService, private http: HttpClient, private cartService: CartService
  ) { }



  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe(res => {
      console.log(this.products = res)
    })


  }

  removeProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(x => x.id !== id)
    })
  }

  addCart(product) {
    this.cartService.addProductToCart(product)
  }




}
