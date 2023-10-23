import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';

@Component({
  selector: 'app-book-review-form',
  templateUrl: './book-review-form.component.html'
})
export class BookReviewFormComponent {

  constructor(private router: Router, private alertService: AlertServiceService) {
    this.router = router;
    this.alertService = alertService;
  }
  contentControl = new FormControl('', Validators.required);
  rating = 1;

  onRatingChange(rating: number) {
    this.rating = rating;
    console.log('Rating changed to', rating);
  }

  onSubmit() {
    if (this.contentControl.invalid) {
      this.alertService.show("Please enter a review.", "error");
    } else {
      this.alertService.show("Review created!", "success");
      this.router.navigate(this.router.url.split('/').slice(0, -1));
    }
  }
}
