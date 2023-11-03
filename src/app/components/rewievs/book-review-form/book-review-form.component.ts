import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-book-review-form',
  templateUrl: './book-review-form.component.html',
})
export class BookReviewFormComponent implements OnDestroy {
  constructor(
    private alertService: AlertServiceService,
    private route: ActivatedRoute,
    private reviewService: ReviewsService,
  ) {
    this.bookId = this.route.snapshot.paramMap.get('id');
  }

  contentControl = new FormControl('', Validators.required);
  rating = 1;
  bookId: string | null;
  sub: Subscription = new Subscription();

  onRatingChange(rating: number) {
    this.rating = rating;
    console.log('Rating changed to', rating);
  }

  onSubmit() {
    if (this.contentControl.invalid || !this.contentControl.value || !this.bookId) {
      this.alertService.show('Please enter a review.', 'error');
    } else {
      this.sub = this.reviewService.createReview(
        { content: this.contentControl.value, rating: this.rating },
        this.bookId,
      ).subscribe();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
