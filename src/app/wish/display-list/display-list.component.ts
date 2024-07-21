import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from '../../../shared/services/EventService'

@Component({
  selector: 'display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() visibleWishes: WishItem[] = [];

  completed_txt_css(wish: WishItem) {
    return wish.isCompleted ? 'wish_complete text-muted' : '';
  }
  toggleIsCompleted(wish: WishItem) {
    wish.isCompleted = !wish.isCompleted;
  }
  removeWish(wish: WishItem) {
    events.emit('removeWish', wish);
  }
}
