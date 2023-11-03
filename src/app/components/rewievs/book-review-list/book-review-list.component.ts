import { Component, EventEmitter, Input, Output } from '@angular/core';
import IBookReview from 'src/app/models/IBookReview';

@Component({
  selector: 'app-book-review-list',
  templateUrl: './book-review-list.component.html'
})
export class BookReviewListComponent {
  @Input() bookReviews: IBookReview[] = [];
  @Output() onRatingChange: EventEmitter<string> = new EventEmitter<string>();

  onDeleteReview(reviewId: string) {
    this.onRatingChange.emit(reviewId);
  }
}
