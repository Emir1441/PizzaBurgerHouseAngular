import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/models/order.model';


@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  constructor(private router: Router, private modalService: NgbModal,
    public order: Order) {
    if (order.customerPhoneNumber == null || order.customerName == null,
      order.paymentMethod.paymentType == null
    ) {
      router.navigateByUrl("/checkout/step1");
    }
  }
  closeModal() {
    if (this.order.orderConfirmation.orderId !== 0) {
      this.modalService.dismissAll();
    }
  }
}