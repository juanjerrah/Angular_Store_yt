export interface Cart {
    items: Array<CartItem>
}

export class CartItem{
    public id: number
    product: string;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number,
        product: string,
        name: string,
        price: number,
        quantity: number){
            this.id = id
            this.product = product
            this.name = name
            this.price = price
            this.quantity = quantity

        }
}