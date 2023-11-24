import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AlertServiceService } from './alert-service.service';
import { Observable, finalize, tap } from 'rxjs';
import IComment from '../models/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient, private alertService: AlertServiceService) { }

  isLoading = signal(false);

  getCommentsForReview(reviewId: string) : Observable<IComment[]> {
    this.isLoading.set(true);
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
            console.log(err);
          },
        ),
      );
  }
}
