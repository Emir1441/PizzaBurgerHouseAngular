import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  apiUrl: string = environment.ApiUrl;

  products = []
  listLoading: boolean = false;

  constructor(public productService: ProductService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe(res => {
      console.log(this.products = res)
    })
  }

  removeProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(x => x.productId !== id)
    })
  }




}
