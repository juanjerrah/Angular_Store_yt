import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: {[id:number]: number} = {
  1: 400,
  3: 335,
  4: 350
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  public cols: number = 3
  public category: string | undefined 
  public rowHeight = ROWS_HEIGHT[this.cols]

  constructor(private cartService: CartService){}

  onColumsCountChange(colsNum: number): void{
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }

  onAddToCart(product: Product): void{

    let cartItem = new CartItem(product.id, product.image, 
      product.title, product.price, 1)

    this.cartService.addToCart(cartItem)

    
  }
}
