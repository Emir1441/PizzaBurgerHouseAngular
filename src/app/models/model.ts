export class Product {
    productId?: number
    productType: any
    productName?: any
    productDescription?: any
    productWeight?: any
    price?: any
    uploadImage: any
}
export class PaymentMethod {
    paymentType: string
}

export class DeliveryOrder {
    cartLineId: number;
    customerCity: string;
    customerStreet: string;
    customerHouseNumber: string;
    customerApartmentNumber: string;

    customerEntranceNumber: string;

}

export class CartLine {
    constructor(private productId: number, private productName: string,
        private price: number,
        private quantity: number) { }
}
export class OrderConfirmation {
    constructor(public orderId: number,
        public orderName: string,
        public orderPhone: string,
        public amount: number) { }
}

export class Login {
    email: string
    password: string
}
export class Category {
    categoryId: number
    categoryName: string
}
