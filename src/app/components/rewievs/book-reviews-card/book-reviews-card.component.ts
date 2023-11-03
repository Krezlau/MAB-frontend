import { Component, EventEmitter, Input, Output } from '@angular/core';
import IBookReview from 'src/app/models/IBookReview';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book-reviews-card',
  templateUrl: './book-reviews-card.component.html'
})
export class BookReviewsCardComponent {
  @Input() bookReviews: IBookReview[] = [];
  @Output() OnRatingChanged: EventEmitter<string> = new EventEmitter<string>();

  ratingChanged(id: string) {
    this.OnRatingChanged.emit(id);
  }
}
