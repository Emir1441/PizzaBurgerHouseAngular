import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {
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
          // productType: new FormControl(this.product.productType),
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
