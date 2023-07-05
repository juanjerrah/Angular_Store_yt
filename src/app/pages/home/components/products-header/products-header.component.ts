import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  public sort = 'sort'
  public itemsShowCounter: number = 10

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort
  }

  changeItemsShowCounter(numItems: number): void{
    this.itemsShowCounter = numItems
  }

  onColumsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }

}
