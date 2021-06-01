import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup
  categories = []
  id
  imagePath
  imgURL: string | ArrayBuffer = "/assets/image/empty.jpg"

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private categoryService: CategoryService, private productService: ProductService,
    private route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['categoryId']
    this.getAll()
    this.form = this.formBuilder.group({
      productName: [''],
      productDescription: [''],
      productWeight: [''],
      uploadedFile: [''],
      price: [null]
    });
  }
  uploadFile(files) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      uploadedFile: file
    });
    this.form.get('uploadedFile').updateValueAndValidity()
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
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
    const formData = new FormData();
    formData.append('productName', this.form.get('productName').value);
    formData.append('productDescription', this.form.get('productDescription').value);
    formData.append('productWeight', this.form.get('productWeight').value);
    formData.append('price', this.form.get('price').value);
    formData.append('uploadedFile', this.form.get('uploadedFile').value);
    formData.append('categoryId', this.id);
    this.productService.addProduct(formData).subscribe(res => console.log(res))
    this.modalService.dismissAll();
  }
}