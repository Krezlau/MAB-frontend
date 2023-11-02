import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { finalize, tap } from 'rxjs';
import IBookCard from '../models/IBookCard';
import { AlertServiceService } from './alert-service.service';
import IBookDetails from '../models/IBookDetails';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private alertService: AlertServiceService
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

  getBookById(id: string) {
    this.isLoading.set(true);
    return this.http.get<IBookDetails>(`http://localhost:8080/api/books/${id}`, {
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

  handleSuccess(data: any) {
    console.log('Success:', data);
  }

  handleError(error: any) {
    this.alertService.show(`Something went wrong. Try again.`, "error");
  }
}
