import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-pisition',
  templateUrl: './add-pisition.component.html',
  styleUrls: ['./add-pisition.component.css']
})
export class AddPisitionComponent implements OnInit {

  form: FormGroup
  categories = []
  id
  constructor(private modalService: NgbModal, private categoryService: CategoryService, private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {


    this.id = this.route.snapshot.params['categoryId']

    this.getAll()


    this.form = new FormGroup({
      // productType: new FormControl('', [Validators.required]),
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
