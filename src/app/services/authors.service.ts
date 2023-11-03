import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, finalize, tap } from 'rxjs';
import IAuthor from '../models/IAuthor';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(
    private http: HttpClient,
  ) {}

  isLoading = signal(false);

  getAuthors() {
    this.isLoading.set(true);
    return this.http
      .get<IAuthor[]>('http://localhost:8080/api/authors', {
        headers: {
          ContentType: 'application/json',
        },
      })
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        }),
        tap(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.log(error);
          },
        ),
      );
  }
}
