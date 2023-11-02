import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, finalize, tap } from 'rxjs';
import IAuthor from '../models/IAuthor';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  isLoading = signal(false);

  getAuthors() {
    this.isLoading.set(true);
    return this.http
      .get<IAuthor[]>('http://localhost:8080/api/authors', {
        headers: {
          Authorization: `Bearer ${
            this.authService.getAuthState()().authToken
          }`,
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
