import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {

  constructor(private router: Router) {
    this.router = router;
  }

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
    if (this.usernameControl.invalid || this.emailControl.invalid || this.repeatEmailControl.invalid || this.passwordControl.invalid || this.repeatPasswordControl.invalid) {
      console.log('Form is invalid');
      this.usernameControl.invalid ? console.log('Username is invalid') : null;
      this.emailControl.invalid ? console.log('Email is invalid') : null;
      this.repeatEmailControl.invalid ? console.log('Repeat email is invalid') : null;
      this.passwordControl.invalid ? console.log('Password is invalid') : null;
      this.repeatPasswordControl.invalid ? console.log('Repeat password is invalid') : null;
    }
    else {
      console.log('Form is valid');
      this.router.navigate(['/login']);
    }
  }
}
