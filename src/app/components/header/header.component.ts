import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  private _cart: Cart = { items: [] } 
  public itemsQuantity = 0
  
  constructor(private _cartService: CartService) {}
  
  @Input()
  get cart(): Cart {
    return this._cart
  }

  set cart(cart: Cart) {
    this._cart = cart

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0)
  }

  getTotal(cart: CartItem[]): number {
    return this._cartService.getFinalPrice(cart)
  }

  onClearCart(): void {
    this._cartService.clearCart()
  }

}
