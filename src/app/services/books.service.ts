import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { finalize, tap } from 'rxjs';
import IBookCard from '../models/IBookCard';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  isLoading = signal(false);

  getBooks() {
    this.isLoading.set(true);
    return this.http
      .get<IBookCard[]>('http://localhost:8080/api/books', {
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
          (data) => {
            this.handleSuccess(data);
          },
          (error) => {
            this.handleError(error);
          },
        ),
      );
  }

  handleSuccess(data: IBookCard[]) {
    console.log('Success:', data);
  }

  handleError(error: any) {
    console.error('Error:', error);
  }
}
