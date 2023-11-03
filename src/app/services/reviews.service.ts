import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription, finalize, tap } from 'rxjs';
import IBookReview from '../models/IBookReview';
import IReviewCreate from '../models/IReviewCreate';
import { AlertServiceService } from './alert-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private alertService: AlertServiceService,
    private router: Router,
  ) {}

  isLoading = signal(false);

  getReviewsForBook(bookId: string) {
    this.isLoading.set(true);
    return this.http
      .get<IBookReview[]>(
        `http://localhost:8080/api/reviews/by-book/${bookId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
              this.authService.getAuthState()().authToken
            }`,
          },
        },
      )
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
        tap(
          (reviews: IBookReview[]) => {
            console.log(reviews);
          },
          (err) => {
            console.log(err);
          },
        ),
      );
  }

  createReview(review: IReviewCreate, bookId: string) {
    this.isLoading.set(true);
    return this.http
      .post(`http://localhost:8080/api/reviews/by-book/${bookId}`, review, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            this.authService.getAuthState()().authToken
          }`,
        },
      })
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
        tap(
          (result) => {
            console.log(result);
            this.alertService.show('Review created successfully', 'success');
            this.router.navigate(['/book-catalog', bookId]);
          },
          (err) => {
            console.log(err);
            this.alertService.show(
              'Error creating review. Please try again.',
              'error',
            );
          },
        ),
      );
  }

  deleteReview(reviewId: string) {
    this.isLoading.set(true);
    return this.http
      .delete(`http://localhost:8080/api/reviews/${reviewId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            this.authService.getAuthState()().authToken
          }`,
        },
      })
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
        tap(
          (result) => {
            console.log(result);
            this.alertService.show('Review deleted successfully', 'success');
          },
          (err) => {
            console.log(err);
            this.alertService.show(
              'Error deleting review. Please try again.',
              'error',
            );
          },
        ),
      );
  }
}
