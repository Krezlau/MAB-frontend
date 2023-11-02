import { Component, Input } from '@angular/core';
import IBookDetails from 'src/app/models/IBookDetails';
import IBookReview from 'src/app/models/IBookReview';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {
  @Input() book: IBookDetails | null | undefined;
  @Input() reviews: IBookReview[] | null | undefined;

  getAverageRating(): number {
    if (!this.reviews || this.reviews.length === 0) {
      return 0;
    }

    const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);

    return sum / this.reviews.length;
  }

  getReviewCount(): number {
    if (!this.reviews) {
      return 0;
    }

    return this.reviews.length;
  }
}
