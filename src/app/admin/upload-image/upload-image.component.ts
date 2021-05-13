import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  addImage: FormGroup;
  responseIdImage: any


  public imagePath;
  imgURL: any;

  constructor(public fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.addImage = this.fb.group({
      uploadedFile: [null]
    })
  }

  uploadFile(files) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addImage.patchValue({
      uploadedFile: file
    });
    this.addImage.get('uploadedFile').updateValueAndValidity()


    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }


  saveImage() {
    var formData: any = new FormData();
    formData.append("uploadedFile", this.addImage.get('uploadedFile').value)
    this.productService.addImage(formData).subscribe(res => {
      console.log(this.responseIdImage = res)

    })
  }

}
