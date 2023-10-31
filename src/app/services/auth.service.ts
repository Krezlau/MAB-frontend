import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, finalize, tap } from 'rxjs';
import IAuthResponse from '../models/IAuthResponse';
import { Router } from '@angular/router';
import { AlertServiceService } from './alert-service.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authState = {
    username: '',
    authToken: '',
    isLoggedIn: false,
  };
  private xd: Subscription = new Subscription();

  private _authStateSubject = new BehaviorSubject<IAuthState>(this._authState);
  private _loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this._loadingSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertServiceService,
  ) {}

  retrieveAuthState(): void {
    const expirationDate = localStorage.getItem('expires_at');
    console.log('expirationDate', expirationDate);
    const mom = moment(expirationDate).add(5*60, 'second');
    console.log('mom', mom);
    if (expirationDate && moment().add(5*60, 'second').isBefore(moment(expirationDate))) {
      const state = localStorage.getItem('authState');
      if (state === null) {
        return;
      }
      this._authState = JSON.parse(state);
      this._authStateSubject.next(this._authState);
      console.log('authState', this._authState);
    }
  }

  getAuthState() {
    return this._authStateSubject.asObservable();
  }

  login(username: string, password: string) {
    this.xd = this.sendLoginRequest(username, password).subscribe();
  }

  sendLoginRequest(username: string, password: string) {
    this._loadingSubject.next(true);
    return this.http
      .post<IAuthResponse>('http://localhost:8080/api/auth/login', {
        username,
        password,
      })
      .pipe(
        finalize(() => {
          this._loadingSubject.next(false);
          this.xd.unsubscribe();
        }),
        tap(
          (res) => this.handleAuthResponse(res),
          (error) => this.handleAuthError(error),
        ),
      );
  }

  logout() {
    this._authState = {
      username: '',
      authToken: '',
      isLoggedIn: false,
    };
    this._authStateSubject.next(this._authState);
    localStorage.removeItem('authState');
  }

  private handleAuthError(err: any) {
    console.log(err);
    this.alertService.show('Invalid username or password', 'error');
  }

  private handleAuthResponse(res: IAuthResponse) {
    console.log('Response: ', res);
    this._authState = {
      username: res.username,
      authToken: res.token,
      isLoggedIn: true,
    };
    this._authStateSubject.next(this._authState);
    localStorage.setItem('authState', JSON.stringify(this._authState));
    // set expiration date
    // moment doesnt work
    const expiresAt = moment().add(1, 'hour');
    localStorage.setItem('expires_at', expiresAt.toISOString());
    this.router.navigate(['/book-catalog']);
    this.alertService.show('Logged in successfully!', 'success');
  }
}

export interface IAuthState {
  username: string;
  authToken: string;
  isLoggedIn: boolean;
}
