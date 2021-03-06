import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PruductService } from '../services/pruduct.service';
import { switchMap } from 'rxjs/operators'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { fileURLToPath } from 'url';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  apiUrl: string = 'https://localhost:44320/';
  form: FormGroup;
  product: Product
  id: number;
  constructor(private route: ActivatedRoute, private productService: PruductService, private router: Router
  ) { }
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProductById(params['id'])
      })
    ).subscribe((product: Product) => {
      this.product = product
      this.form = new FormGroup({
        id: new FormControl(this.product.id),
        productName: new FormControl(this.product.productName),
        productDescription: new FormControl(this.product.productDescription),
        productWeight: new FormControl(this.product.productWeight),
        price: new FormControl(this.product.price),
        imageName: new FormControl(this.product.imageName),
        imagePath: new FormControl(this.product.imagePath),

        uploadImageProduct: new FormControl()


      })
    })
  }



  // uploadFile(event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({
  //     uploadImageProduct: file,

  //   });
  //   this.form.get('uploadImageProduct').updateValueAndValidity()
  //   this.form.get('uploadImageProduct').updateValueAndValidity()
  // }
  uploadFile(event) {
    const file = event.target.files[0];
    this.form.get('uploadImageProduct').setValue(file)

  }





  submitUpdateForm() {

    var formData: any = new FormData();
    formData.append("id", this.form.get('id').value);
    formData.append("productName", this.form.get('productName').value);
    formData.append("productDescription", this.form.get('productDescription').value);
    formData.append("productWeight", this.form.get('productWeight').value);
    formData.append("price", this.form.get('price').value);
    formData.append("imageName", this.form.get('imageName').value);
    formData.append("imagePath", this.form.get('imagePath').value);
    formData.append("uploadImageProduct", this.form.get('uploadImageProduct').value)

    console.log('FORMDATA', formData);
    console.log('FORM', this.form.value);

    this.productService.editProduct(formData).subscribe(res => {
      console.log(res)
    })
  }
}