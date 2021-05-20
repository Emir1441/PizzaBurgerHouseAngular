import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input('productId') productId: number
  @Input('categoryId') categoryId: number
  apiUrl: string = environment.ApiUrl;
  product
  form: FormGroup
  id

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {


    this.productService.getProductById(this.productId)


      .subscribe(product => {
        console.log(this.product = product);

        this.form = new FormGroup({
          productId: new FormControl(this.product.productId),

          productName: new FormControl(this.product.productName),
          productDescription: new FormControl(this.product.productDescription),
          productWeight: new FormControl(this.product.productWeight),
          price: new FormControl(this.product.price),
          uploadImageId: new FormControl(this.product.uploadImage.uploadImageId),
          categoryId: new FormControl(this.categoryId),
        })
      })



  }

  closeModal() {
    this.modalService.dismissAll();
  }

  onSubmit() {
    this.productService.editProduct(this.form.value).subscribe(res => {
      console.log(res)
      this.modalService.dismissAll();


    })
  }

}
