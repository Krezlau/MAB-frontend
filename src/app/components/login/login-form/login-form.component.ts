import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(
    private router: Router,
    private alertService: AlertServiceService,
    private authService: AuthService,
  ) {}
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);


  onSubmit() {
    if (this.emailControl.invalid) {
      this.alertService.show('Please enter a valid email address.', 'error');
    } else if (this.passwordControl.invalid) {
      this.alertService.show('Please enter a valid password.', 'error');
    } else {
      this.alertService.show('Login successful.', 'success');

      // temporary
      this.authService.login('Krezlau', '12345');

      this.router.navigate(['/book-catalog']);
    }
  }
}
