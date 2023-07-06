import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private _cartService: CartService) {  }

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items
    })
  }

  getFinalPrice(cartItems: CartItem[]): number {
    return this._cartService.getFinalPrice(cartItems)
  }

  onClearCart(){
    this._cartService.clearCart()
  }

  onRemoveFromCart(item: CartItem): void {
    this._cartService.removeFromCart(item)
  }

  increaseProductQuantity(item: CartItem): void {
    this._cartService.addToCart(item)
  }

  decreaseProductQuantity(item: CartItem): void {
    this._cartService.removeItemQuantity(item)
  }
}
