import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable()
export class Cart {
    selections: ProductSelection[] = [];
    itemCount: number = 0;
    totalPrice: number = 0;
    constructor(public http: HttpClient) { }

    addProduct(product) {
        let selection = this.selections.find(ps => ps.productId == product.productId);
        if (selection) {
            selection.quantity++;
        } else {
            this.selections.push(new ProductSelection(this,
                product.productId, product.productName, product.productDescription, product.productWeight,
                product.price, 1));
        }
        this.update();
    }
    updateQuantity(productId: number, quantity: number) {
        if (quantity > 0) {
            let selection = this.selections.find(ps => ps.productId == productId);
            if (selection) {
                selection.quantity = quantity;
            }
        } else {
            let index = this.selections.findIndex(ps => ps.productId == productId);
            if (index != -1) {
                this.selections.splice(index, 1);
            }
            this.update();
        }
    }
    clear() {
        this.selections = [];
        this.update();
    }
    update(storeData: boolean = true) {
        this.itemCount = this.selections.map(ps => ps.quantity)
            .reduce((prev, curr) => prev + curr, 0);
        this.totalPrice = this.selections.map(ps => ps.price * ps.quantity)
            .reduce((prev, curr) => prev + curr, 0);
    }
}
export class ProductSelection {
    constructor(private cart: Cart,
        public productId?: number,
        public productName?: string,
        public productDescription?: string,
        public productWeight?: number,
        public price?: number,
        private quantityValue?: number) { }
    get quantity() {
        return this.quantityValue;
    }
    set quantity(newQuantity: number) {
        this.quantityValue = newQuantity;
        this.cart.update();
    }
}
