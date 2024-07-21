import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filtersArr = [
  (wish: WishItem) => true,
  (wish: WishItem) => !wish.isCompleted,
  (wish: WishItem) => wish.isCompleted
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent {
  @Input() applyFilter: any;
  @Output() applyFilterChange = new EventEmitter<any>();

  listFilter: string = "0";

  changeFilter(value: string) {
    let idx: number = parseInt(value);
    this.applyFilter = filtersArr[idx];
    this.applyFilterChange.emit(this.applyFilter);
  }
}
