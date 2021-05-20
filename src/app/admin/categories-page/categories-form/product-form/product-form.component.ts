import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category.service';

import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  apiUrl: string = environment.ApiUrl;
  products = []
  @Input('categoryId') categoryId: number;

  constructor(private modalService: NgbModal, public productService: ProductService, public categoryService: CategoryService) { }






  ngOnInit() {
    this.categoryService.getProductByIdCategory(this.categoryId)

    this.getAll();
  }



  addProductModal(content) {
    this.modalService.open(content, { centered: true });
  }

  getAll() {
    this.categoryService.getProductByIdCategory(this.categoryId).subscribe(res => {
      this.products = res
      console.log("getPositionByIdCategory", this.products = res)
    })
  }



  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(x => x.productId !== id)
    })
  }

  editModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
