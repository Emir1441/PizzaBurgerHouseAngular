import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup
  categories = []
  id
  constructor(private modalService: NgbModal, private categoryService: CategoryService, private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {


    this.id = this.route.snapshot.params['categoryId']

    this.getAll()


    this.form = new FormGroup({

      productName: new FormControl('', [Validators.required]),
      productDescription: new FormControl(''),
      productWeight: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      uploadImageId: new FormControl('', [Validators.required]),
      categoryId: new FormControl(this.id, [Validators.required]),

    })

  }

  getAll() {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res
    })
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  onSubmit() {
    this.productService.addProduct(this.form.value).subscribe(res => console.log(res))

    console.log(this.form.value)
    this.form.reset();
    this.modalService.dismissAll();


  }

}
