import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  addForm: FormGroup;



  constructor(public fb: FormBuilder, private productService: ProductService, private modalService: NgbModal) { }

  chooseTypes = [
    { name: 'Пицца' },
    { name: 'Бургер' },
    { name: 'Соус' },
    { name: 'Напиток' },
    { name: 'Картошка' },
  ]



  ngOnInit() {

    this.addForm = new FormGroup({
      productType: new FormControl('', [Validators.required]),
      productName: new FormControl('', [Validators.required]),
      productDescription: new FormControl(''),
      productWeight: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      uploadImageId: new FormControl('', [Validators.required]),
    })

  }






  submitAddForm() {
    this.productService.addProduct(this.addForm.value).subscribe(res => console.log(res))
    console.log(this.addForm.value)
    this.addForm.reset();
    this.modalService.dismissAll();

  }
}
