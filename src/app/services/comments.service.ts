import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AlertServiceService } from './alert-service.service';
import { Observable, finalize, tap } from 'rxjs';
import IComment from '../models/IComment';
import ICommentCreate from '../models/ICommentCreate';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(
    private http: HttpClient,
    private alertService: AlertServiceService,
    private authService: AuthService,
  ) {}

  isLoading = signal(false);
  addCommentLoading = signal(false);

  getCommentsForReview(reviewId: string): Observable<IComment[]> {
    this.isLoading.set(true);
    console.log(this.isLoading());
    return this.http
      .get<IComment[]>(
        `http://localhost:8080/api/comments/by-review/${reviewId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
        tap(
          (comments: IComment[]) => {
            console.log(comments);
          },
          (err) => {
            this.alertService.show(
              'Something went wrong while fetching comments',
              'error',
            );
          },
        ),
      );
  }

  addComment(comment: ICommentCreate) {
    this.addCommentLoading.set(true);
    return this.http
      .post('http://localhost:8080/api/comments', comment, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            this.authService.getAuthState()().authToken
          }`,
        },
      })
      .pipe(
        finalize(() => {
          this.addCommentLoading.set(false);
        }),
        tap(
          (result) => {
            console.log(result);
          },
          (err) => {
            this.alertService.show(
              'Something went wrong while adding comment',
              'error',
            );
          },
        ),
      );
  }
}
