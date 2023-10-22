import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-rating-form',
  templateUrl: './book-rating-form.component.html'
})
export class BookRatingFormComponent {
  @Output() ratingChange = new EventEmitter<number>();

  oldRating = 1;
  rating = 1;

  onMouseEnter(value: number) {
    this.rating = value;
  }

  onMouseOut() {
    this.rating = this.oldRating;
  }

  onClick() {
    this.oldRating = this.rating;
    this.ratingChange.emit(this.rating);
  }
}
