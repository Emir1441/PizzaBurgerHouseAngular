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
    customerCity: string; // доставка город
    customerStreet: string; // доставка улица
    customerHouseNumber: string; //доставка номер дома
    customerApartmentNumber: string; // доставка номер квартиры

    customerEntranceNumber: string; // доставка номер подъезда

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
