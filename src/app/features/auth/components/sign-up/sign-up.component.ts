
import { Component, ViewEncapsulation } from '@angular/core';
import {
  AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators
} from '@angular/forms';
import { ButtonType, InputType } from '../../../../shared/entities/entities';
import { UserFormFields } from '../../entities/entities';
import { AppValidRules } from '../../../../core/entities/valid-rules';
import { Authservice, ISignupRequestDto } from '../../providers/auth.service';
import { Password } from 'primeng/password';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent {
  protected readonly InputType = InputType;
  protected readonly ButtonType = ButtonType;
  protected readonly imageUrl: string = 'https://images.unsplash.com/photo-1763313299304-606adcbcc965?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

  protected signupForm: FormGroup;

  constructor(
    private readonly _authService: Authservice
  ) {

    this.signupForm = new FormGroup({
      [UserFormFields.FullName]: new FormControl('', { validators: AppValidRules.FullName }),
      [UserFormFields.Email]: new FormControl('', { validators: AppValidRules.Email }),
      [UserFormFields.Phone]: new FormControl('', { validators: AppValidRules.Phone }),
      [UserFormFields.Password]: new FormControl('', { validators: AppValidRules.Password }),
      [UserFormFields.ConfirmPassword]: new FormControl('', { validators: AppValidRules.ConfirmPassword })
    }, {
      validators: this._passwordMatchValidator()
    });

  }

  private _passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(UserFormFields.Password)?.value;
      const confirmPassword = control.get(UserFormFields.ConfirmPassword)?.value;
      if (!confirmPassword) return null;
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }


  protected createAccount(): void {

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    const payload: ISignupRequestDto = {
      name: this.signupForm.get(UserFormFields.FullName)?.value,
      email: this.signupForm.get(UserFormFields.Email)?.value,
      password: this.signupForm.get(UserFormFields.Password)?.value,
      confirmPassword: this.signupForm.get(UserFormFields.ConfirmPassword)?.value,
      phone: this.signupForm.get(UserFormFields.Phone)?.value,
      role: 'Admin',
    }
    this._authService.signUp(payload).pipe(
      tap((res) => {
        if (res > 0) {
          alert('signup succcesfull')
        }
        else {
          alert("error occured")
        }
      })
    ).subscribe();

  }

}
