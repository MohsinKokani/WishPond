import { Component, OnInit } from '@angular/core';

import { WishItem } from 'src/shared/models/wishItem';
import { WishService } from './service/wish.service';
import events from 'src/shared/services/EventService';


@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html'
})
export class WishComponent implements OnInit {
  wishes: WishItem[] = [];

  constructor(private wishService: WishService) {
    events.listen('removeWish', (wish: WishItem) => {
      let idx = this.wishes.indexOf(wish);
      this.wishes.splice(idx, 1);
    })
  }
  ngOnInit() {
    this.wishService.getWishes().subscribe((data: any) => {
      this.wishes = data;
    },
      (err: any) => {
        alert(err.message);
      }
    )
  }

  applyFilter: any = (wish: WishItem) => { return true; } //default for 0

}
