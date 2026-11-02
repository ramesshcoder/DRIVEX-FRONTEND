
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { ButtonType, InputType } from '../../../../shared/entities/entities';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {

  protected readonly InputType = InputType;
  protected readonly ButtonType = ButtonType;

  protected signupForm: FormGroup;

  constructor() {

    this.signupForm = new FormGroup({

      fullName: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      }),

      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.email
        ]
      }),

      phone: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/)
        ]
      }),

      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      }),

      confirmPassword: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required
        ]
      })

    }, {
      validators: this.passwordMatchValidator()
    });

  }

  // Password matching validator
  private passwordMatchValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      if (!confirmPassword) return null;

      return password === confirmPassword
        ? null
        : { passwordMismatch: true };

    };

  }

  // Form submit
  protected onSubmit(): void {

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const signupData = this.signupForm.getRawValue();

    console.log('Signup Data:', signupData);

  }

}
