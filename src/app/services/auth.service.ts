import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authState = {
    username: '',
    authToken: '',
    isLoggedIn: false,
  };

  private _authStateSubject = new BehaviorSubject<IAuthState>(this._authState);

  constructor() {}

  getAuthState() {
    return this._authStateSubject.asObservable();
  }

  login(username: string, authToken: string) {
    this._authStateSubject.next({
      username: username,
      authToken: authToken,
      isLoggedIn: true,
    });
  }

  logout() {
    this._authStateSubject.next({
      username: '',
      authToken: '',
      isLoggedIn: false,
    });
  }
}

export interface IAuthState {
  username: string;
  authToken: string;
  isLoggedIn: boolean;
}
