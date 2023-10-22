import { Component } from '@angular/core';

@Component({
  selector: 'app-book-rating-form',
  templateUrl: './book-rating-form.component.html'
})
export class BookRatingFormComponent {
  oldRating = 1;
  rating = 1;

  onMouseEnter(value: number) {
    this.oldRating = this.rating;
    this.rating = value;
  }

  onMouseOut() {
    this.rating = this.oldRating;
  }

  onClick() {
    this.oldRating = this.rating;
  }
}
