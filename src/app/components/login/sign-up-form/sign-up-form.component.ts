import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertServiceService } from 'src/app/services/alert-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {

  constructor(private authService: AuthService, private alertService: AlertServiceService) {
  }

  isLoading = this.authService.isLoading;

  usernameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  repeatEmailControl = new FormControl('', [
    Validators.required,
    Validators.email,
    this.matchValidator(this.emailControl),
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  repeatPasswordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    this.matchValidator(this.passwordControl),
  ]);

  matchValidator(matchingControl: FormControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = matchingControl.value !== control.value;
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  onSubmit() {
    if (this.usernameControl.invalid || !this.usernameControl.value || this.emailControl.invalid || !this.emailControl.value || this.repeatEmailControl.invalid || this.passwordControl.invalid || !this.passwordControl.value || this.repeatPasswordControl.invalid) {
      this.alertService.show("Form invalid.", "error");
    }
    else {
      this.authService.register(this.usernameControl.value, this.passwordControl.value, this.emailControl.value)
    }
  }
}
