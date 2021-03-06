import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PruductService } from '../services/pruduct.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addForm: FormGroup;






  constructor(public fb: FormBuilder, private productService: PruductService) {
    this.addForm = this.fb.group({
      id: null, //delete
      productName: '', //delete
      productDescription: '', //delete
      productWeight: '', //delete
      price: '', //delete
      // uploadedFile: [null]
      uploadImageProduct: [null]
    })
  }



  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addForm.patchValue({
      uploadImageProduct: file
      // uploadedFile: file
    });
    this.addForm.get('uploadImageProduct').updateValueAndValidity()
    // this.addForm.get('uploadedFile').updateValueAndValidity()
  }


  submitAddForm() {
    var formData: any = new FormData();



    formData.append("productName", this.addForm.get('productName').value);
    formData.append("productDescription", this.addForm.get('productDescription').value);
    formData.append("productWeight", this.addForm.get('productWeight').value);
    formData.append("price", this.addForm.get('price').value);



    // formData.append("uploadedFile", this.addForm.get('uploadedFile').value)

    formData.append("uploadImageProduct", this.addForm.get('uploadImageProduct').value)
    console.log(this.addForm.value)
    this.productService.addProduct(formData).subscribe(res => console.log(res))

  }







}
