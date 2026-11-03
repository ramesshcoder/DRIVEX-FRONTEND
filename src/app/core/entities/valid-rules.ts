import { Validators } from '@angular/forms';
import { ValidLength } from './valid-length';

export class AppValidRules {
    private constructor() { }

    public static readonly Required = Validators.required;

    public static readonly Email = [
        Validators.required,
        Validators.email
    ];

    public static readonly FullName = [
        Validators.required,
        Validators.minLength(ValidLength.FullName.Min),
        Validators.maxLength(ValidLength.FullName.Max)
    ];

    public static readonly Phone = [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
    ];

    public static readonly Password = [
        Validators.required,
        Validators.minLength(ValidLength.Password.Min),
        Validators.maxLength(ValidLength.Password.Max)
    ];

    public static readonly ConfirmPassword = [
        Validators.required
    ];
}