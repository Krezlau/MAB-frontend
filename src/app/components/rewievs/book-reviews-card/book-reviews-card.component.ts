import { Component, Input } from '@angular/core';
import IBookReview from 'src/app/models/IBookReview';

@Component({
  selector: 'app-book-reviews-card',
  templateUrl: './book-reviews-card.component.html'
})
export class BookReviewsCardComponent {
  @Input() bookReviews: IBookReview[] = [];
}
