import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(
    private alertService: AlertServiceService,
    private authService: AuthService,
  ) {}

  isLoading$ = this.authService.isLoading$;

  usernameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  onSubmit() {
    if (this.usernameControl.invalid || !this.usernameControl.value) {
      this.alertService.show('Please enter a valid username.', 'error');
    } else if (this.passwordControl.invalid || !this.passwordControl.value) {
      this.alertService.show('Please enter a valid password.', 'error');
    } else {
      this.authService.login(
        this.usernameControl.value,
        this.passwordControl.value,
      );
    }
  }
}
