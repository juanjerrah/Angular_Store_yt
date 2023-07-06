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
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGnhbmC9DEAOL8SHXuT4TtWFJ12Jjg1pYfg&usqp=CAU'

  }
  

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
