import { Injectable } from "@angular/core";
import { RepositoryService } from "../services/repository.service";
import { Cart } from "./cart.model";
import { CartLine, DeliveryOrder, OrderConfirmation, PaymentMethod } from "./model";

@Injectable()
export class Order {
    constructor(public cart: Cart, private repo: RepositoryService) { }
    deliveryOrder: DeliveryOrder = new DeliveryOrder()
    paymentMethod: PaymentMethod = new PaymentMethod();
    customerName: string
    customerPhoneNumber: string
    customerEmail: string
    orderConfirmation: OrderConfirmation;
    get products(): CartLine[] {
        return this.cart.selections
            .map(p => new CartLine(p.productId, p.productName,
                p.price, p.quantity));
    }
    submitDelivery() {
        this.repo.deliveryOrderSubmit(this);
    }
}
