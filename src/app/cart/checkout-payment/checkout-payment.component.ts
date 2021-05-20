import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cart } from 'src/app/models/cart.model';
import { Order } from 'src/app/models/order.model';


@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent {

  delivery: any;




  constructor(public order: Order, private router: Router, public cart: Cart,
    private modalService: NgbModal) {
    if (order.products.length == 0) {
      this.router.navigateByUrl("/pizza");
    }
  }






  chooseCity = [
    { name: 'Минск' },
    { name: 'Орша' },
  ]

  submitOrderDelivery(content) {
    this.modalService.open(content, { centered: true });
    this.order.submitDelivery();

  }






}
