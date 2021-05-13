import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  pay: boolean = false;
  constructor(public order: Order) { }

  ngOnInit(): void {
  }

}
