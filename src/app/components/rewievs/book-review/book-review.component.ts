import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import IBookReview from 'src/app/models/IBookReview';
import IComment from 'src/app/models/IComment';
import { AuthService } from 'src/app/services/auth.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
})
export class BookReviewComponent implements OnDestroy {
  @Input() review: IBookReview = {} as IBookReview;
  @Output() onDeleteReview: EventEmitter<string> = new EventEmitter<string>();
  commentsOpen: boolean = false;
  comments: IComment[] = [];

  constructor(
    private authService: AuthService,
    private reviewsService: ReviewsService,
  ) {}

  sub: Subscription = new Subscription();

  showDeleteButton(): boolean {
    return (
      this.authService.getAuthState()().isLoggedIn &&
      this.authService.getAuthState()().username === this.review.username
    );
  }

  deleteReview() {
    this.sub = this.reviewsService.deleteReview(this.review.id).subscribe((response) => {
      console.log(response);
      console.log('Review deleted');
      this.onDeleteReview.emit(this.review.id);
    });
  }

  showComments() {
    this.commentsOpen = !this.commentsOpen;
    console.log("xd");
  }

  onCommentAdded() {
    console.log("lmao")
    this.review.commentsCount++;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
