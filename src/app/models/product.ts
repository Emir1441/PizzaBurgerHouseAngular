// export class Product {
//     id?: number;
//     productName?: any;
//     productDescription?: any;
//     productWeight?: any;
//     price?: any;
//     imageName?: any;
//     imagePath?: any;
//     quantity?: number
//     totalPrice?: number



// }

export class Product {
    constructor() { }
    id?: number;
    productName?: any;
    productDescription?: any;
    productWeight?: any;
    price?: any;
    imageName?: any;
    imagePath?: any;
    // quantity?: number
    // totalPrice?: number

}


export class CartLine {
    constructor(public product: Product,
        public quantity: number, public totalPrice: number = 333) { }


    get lineTotal() {
        return this.quantity * this.product.price;
    }







}