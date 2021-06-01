import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  imgURL: string | ArrayBuffer = "/assets/image/empty.jpg"
  imagePath
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.productService.getProductById(this.productId)
      .subscribe(product => {
        console.log(this.product = product);

        this.form = this.formBuilder.group({
          productId: [this.product.productId],
          categoryId: [this.categoryId],
          productName: [this.product.productName],
          productDescription: [this.product.productDescription],
          productWeight: [this.product.productWeight],
          price: [this.product.price],
          uploadedFile: [this.product.path],
          name: [this.product.name],
          path: [this.product.path],
        });
      })
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
  closeModal() {
    this.modalService.dismissAll();
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('productId', this.form.get('productId').value);
    formData.append('productName', this.form.get('productName').value);
    formData.append('productDescription', this.form.get('productDescription').value);
    formData.append('productWeight', this.form.get('productWeight').value);
    formData.append('price', this.form.get('price').value);
    formData.append('uploadedFile', this.form.get('uploadedFile').value);
    formData.append('categoryId', this.form.get('categoryId').value);
    formData.append('name', this.form.get('name').value);
    formData.append('path', this.form.get('path').value);
    console.log(formData)
    this.productService.editProduct(formData).subscribe(res => {
      console.log(res)
    })
    this.modalService.dismissAll();
  }
}