import { Component, OnInit } from '@angular/core';
import { AlertServiceService } from './services/alert-service.service';
import { AuthService } from './services/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'books';
  alert$ = this.alertService.getAlert();
  isLoggedIn$ = this.authService.getAuthState().pipe(map(xd => xd.isLoggedIn));
  username$ = this.authService.getAuthState().pipe(map(xd => xd.username));

  constructor(private alertService: AlertServiceService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.retrieveAuthState();
  }

  onLogoutClick() {
    this.authService.logout();
  }

  alertHide() {
    this.alertService.hide();
  }
}
