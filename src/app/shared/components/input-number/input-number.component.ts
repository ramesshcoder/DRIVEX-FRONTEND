import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NumberMode } from '../../entities/entities';

@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss',
})
export class InputNumberComponent {
  @Input() control!: FormControl<number | null>;
  @Input() label = '';
  @Input() inputId = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() errorMessage = 'This field is invalid';

  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() step = 1;
  @Input() mode: NumberMode = NumberMode.Decimal;
  @Input() currency = 'INR';
  @Input() locale = 'en-IN';
  @Input() minFractionDigits: number | undefined;
  @Input() maxFractionDigits: number | undefined;

  get showError(): boolean {
    return this.control?.invalid && this.control?.touched;
  }
}
