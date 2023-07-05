import { Component } from '@angular/core';

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


  onColumsCountChange(colsNum: number): void{
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory
  }
}