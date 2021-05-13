import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-delivery-page',
  templateUrl: './delivery-page.component.html',
  styleUrls: ['./delivery-page.component.css']
})
export class DeliveryPageComponent implements OnInit {


  deliveryOrders: any


  constructor(private orderService: OrderService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.orderService.getDeliveryOrders().subscribe(res => {
      console.log(this.deliveryOrders = res)
    })
  }




  deliveryViewModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
