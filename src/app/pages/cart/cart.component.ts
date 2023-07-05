import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  public cart: Cart = {items: [
  {
    id: 1,
    name: "Tv samsung",
    price: 12500.50,
    product: "https://via.placeholder.com/150",
    quantity: 1
  },
  {
    id: 2,
    name: "Video game",
    price: 2000.50,
    product: "https://via.placeholder.com/150",
    quantity: 3
  },
  {
    id: 3,
    name: "microondas",
    price: 1244.50,
    product: "https://via.placeholder.com/150",
    quantity: 3
  },
  {
    id: 4,
    name: "geladeira",
    price: 1264.50,
    product: "https://via.placeholder.com/150",
    quantity: 1
  },]}
  public dataSource: Array<CartItem> = []
  public displayedColumns: Array<string> = [
    'product', 'name', 'price', 'quantity', 'total', 'action'
  ]

  ngOnInit(): void {
    this.dataSource = this.cart.items
  }

  getFinalPrice(cartItems: CartItem[]): number {
    const total = cartItems
      .map((item)=> item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);

    return total
  }

}
