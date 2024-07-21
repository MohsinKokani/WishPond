import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {
  @Output() addWishEvent = new EventEmitter<WishItem>();
  currentWish: string = "";
  addWish() {
    this.addWishEvent.emit(new WishItem(this.currentWish));
    this.currentWish = "";
  }
}
