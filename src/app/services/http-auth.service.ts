import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IAuthResponse from '../models/IAuthResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<IAuthResponse>('http://localhost:8080/auth/login', { username, password });
  }
}
