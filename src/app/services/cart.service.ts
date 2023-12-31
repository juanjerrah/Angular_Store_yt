import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = new BehaviorSubject<Cart>({ items:[] })

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void{
    const items = [...this.cart.value.items]

    const itemInCart = items.find((_item) => _item.id === item.id)

    itemInCart ? itemInCart.quantity += 1 : items.push(item);
    
    this.cart.next({ items })

    const data = JSON.stringify(items)
    localStorage.setItem('cart', data)

    this._snackBar.open('1 item adicionado ao carrinho', 'Ok', { duration: 3000 })
  }

  getFinalPrice(cartItems: CartItem[]): number {
    const total = cartItems
      .map((item)=> item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);

    return total
  }

  clearCart(): void {
    this.cart.next({ items: [] })
    this._snackBar.open('Carrinho está vazio', 'Ok', { duration: 3000 })
  }

  removeFromCart(item: CartItem): void{
    const filteredItem = this.cart.value.items
      .filter((_cartItem) => item.id !== _cartItem.id)
    
    this.cart.next({ items: filteredItem })

    this._snackBar.open(`${item.name} foi removido`, 'Ok', { duration: 3000 })
  }

  removeItemQuantity(item: CartItem): void {
    const filteredItem = this.cart.value.items
      .filter((_cartItem) => item.id === _cartItem.id)
  }

}
