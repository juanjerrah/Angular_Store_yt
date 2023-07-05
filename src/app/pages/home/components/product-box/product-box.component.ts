import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false
  @Output() addToCart = new EventEmitter()

  public product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150.35,
    category: 'clothings',
    description: 'A cool snicker',
    image:'https://via.placeholder.com/150'

  }
  

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
