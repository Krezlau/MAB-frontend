import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { finalize, tap } from 'rxjs';
import IBookReview from '../models/IBookReview';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  isLoading = signal(false);

  getReviewsForBook(bookId: string) {
    this.isLoading.set(true);
    return this.http
      .get<IBookReview[]>(`http://localhost:8080/api/reviews/by-book/${bookId}`, {
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
          (reviews: IBookReview[]) => {
            console.log(reviews);
          },
          (err) => {
            console.log(err);
          },
        ),
      );
  }
}
