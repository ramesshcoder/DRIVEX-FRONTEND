import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: false,
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() public control!: FormControl;
  @Input() public label = '';
  @Input() public inputId = '';
  @Input() public type = 'text';
  @Input() public placeholder = '';
  @Input() public errorMessage = 'This field is invalid';
  @Input() public autocomplete = 'off';

  constructor() {

  }
}
