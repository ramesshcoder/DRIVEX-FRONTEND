import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputType } from '../../entities/entities';

@Component({
  selector: 'app-input-text',
  standalone: false,
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() public control!: FormControl;
  @Input() public label: string = '';
  @Input() public inputId: string = '';
  @Input() public type: InputType = InputType.Text;
  @Input() public placeholder: string = '';
  @Input() public errorMessage: string = 'This field is invalid';
  @Input() public autocomplete: string = 'off';
  @Input() public required: boolean = false;

  constructor() {

  }
}
