import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  apiUrl: string = environment.ApiUrl;
  editForm: FormGroup;
  product: Product;
  id: number;


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.productService.getProductById(params['productId'])
      })


    ).subscribe((product: Product) => {
      console.log(this.product = product)
      // this.product = product
      this.editForm = new FormGroup({
        productId: new FormControl(this.product.productId),
        productType: new FormControl(this.product.productType),
        productName: new FormControl(this.product.productName),
        productDescription: new FormControl(this.product.productDescription),
        productWeight: new FormControl(this.product.productWeight),
        price: new FormControl(this.product.price),
        uploadImageId: new FormControl(this.product.uploadImage.uploadImageId),
      })
    })

  }




  submitUpdateForm() {
    this.productService.editProduct(this.editForm.value).subscribe(res => {
      console.log(res)
      this.editForm.reset()
    })
  }

}
