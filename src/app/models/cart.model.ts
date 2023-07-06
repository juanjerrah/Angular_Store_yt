export class Cart {
    public items: Array<CartItem>

    constructor(items: Array<CartItem>) {
        this.items = items   
    }
}

export class CartItem{
    public id: number
    public product: string;
    public name: string;
    public price: number;
    public quantity: number;

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