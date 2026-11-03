import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  standalone: false,
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.scss',
})
export class FormLabelComponent {
  @Input() label = '';
  @Input() required = false;
}
