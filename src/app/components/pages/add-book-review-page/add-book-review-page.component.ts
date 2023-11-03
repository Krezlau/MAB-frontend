import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-book-review-page',
  templateUrl: './add-book-review-page.component.html',
})
export class AddBookReviewPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertServiceService,
  ) {}

  ngOnInit(): void {
    if (!this.authService.getAuthState()().isLoggedIn) {
      this.router.navigate(['/login']);
      this.alertService.show('Please login to add a book review.', "warning");
    }
  }
}
