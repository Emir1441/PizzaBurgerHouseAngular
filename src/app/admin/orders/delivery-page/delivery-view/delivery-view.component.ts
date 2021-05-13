import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-delivery-view',
  templateUrl: './delivery-view.component.html',
  styleUrls: ['./delivery-view.component.css']
})
export class DeliveryViewComponent implements OnInit {


  viewForm: FormGroup;
  cartLine: any;
  res: any

  constructor(private orderService: OrderService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.orderService.getOrderId(params['orderId'])

      })


    ).subscribe((orderCartLine) => {
      console.log(this.cartLine = orderCartLine)
      this.res = this.cartLine.products

    })
  }

}
