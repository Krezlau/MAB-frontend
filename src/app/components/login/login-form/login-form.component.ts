import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(private router: Router) {
    this.router = router;
  }
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  onSubmit() {
    if (this.emailControl.invalid || this.passwordControl.invalid) {
      console.log('Form is invalid');
    } else {
      console.log('Email: ', this.emailControl.value);
      console.log('Password: ', this.passwordControl.value);
      // redirect to home page
      this.router.navigate(['/book-catalog']);
    }
  }
}
