import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-review-form',
  templateUrl: './book-review-form.component.html'
})
export class BookReviewFormComponent {

  constructor(private router: Router) {
    this.router = router;
  }
  contentControl = new FormControl('', Validators.required);
  rating = 1;

  onRatingChange(rating: number) {
    this.rating = rating;
    console.log('Rating changed to', rating);
  }

  onSubmit() {
    if (this.contentControl.invalid) {
      console.log('Form is invalid');
    } else {
      console.log('Form is valid');
      console.log(this.contentControl.value);
      console.log(this.rating);
      this.router.navigate(this.router.url.split('/').slice(0, -1));
    }
  }
}
