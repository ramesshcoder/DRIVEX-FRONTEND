import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  protected loginForm: FormGroup;

  constructor() {

    this.loginForm = new FormGroup({

      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.email
        ]
      }),

      password: new FormControl<string>('', { nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      })

    });

  }

  protected onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const loginCredentials = this.loginForm.getRawValue();

    console.log('Login Credentials:', loginCredentials);

    // TODO: Call AuthService login API

  }

}
