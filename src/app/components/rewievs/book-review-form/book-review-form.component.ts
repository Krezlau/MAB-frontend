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

  onSubmit() {
    if (this.contentControl.invalid) {
      console.log('Form is invalid');
    } else {
      console.log('Form is valid');
      console.log(this.contentControl.value);
      // redirect to home page
      // this.router.navigate(['/book-catalog']);
    }
  }
}
