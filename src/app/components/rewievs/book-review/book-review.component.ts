import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import IBookReview from 'src/app/models/IBookReview';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
})
export class BookReviewComponent {
  @Input() review: IBookReview = {} as IBookReview;
  @Output() onDeleteReview: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private authService: AuthService,
    private reviewsService: ReviewsService,
  ) {}

  showDeleteButton(): boolean {
    return (
      this.authService.getAuthState()().isLoggedIn &&
      this.authService.getAuthState()().username === this.review.username
    );
  }

  deleteReview() {
    this.onDeleteReview.emit(this.review.id);
    this.reviewsService.deleteReview(this.review.id);
  }
}
