import { Component, EventEmitter, Input, Output, output } from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'normal' | 'large';

@Component({
  selector: 'app-button-component',
  standalone: false,
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
})
export class ButtonComponent {
  @Output() public readonly clicked = new EventEmitter<Event>();

  @Input() public label = '';
  @Input() public type: ButtonType = 'primary';
  @Input() public icon = '';
  @Input() public iconPos: 'left' | 'right' = 'left';
  @Input() public size: ButtonSize = 'normal';
  @Input() public disabled = false;
  @Input() public loading = false;

  protected get severity(): any {
    switch (this.type) {
      case 'secondary':
        return 'secondary';
      case 'danger':
        return 'danger';
      case 'success':
        return 'success';
      default:
        return undefined;
    }
  }

  protected get outlined(): boolean {
    return this.type === 'outline';
  }

  protected get text(): boolean {
    return this.type === 'ghost';
  }

  protected get sizeClass(): string {
    return `button--${this.size}`;
  }

  protected onClick(event: Event): void {
    this.clicked.emit(event);
  }
}
