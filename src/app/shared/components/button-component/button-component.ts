import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { ButtonSize, ButtonType, Position } from '../../entities/entities';

@Component({
  selector: 'app-button-component',
  standalone: false,
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
})
export class ButtonComponent {
  @Output() public readonly clicked = new EventEmitter<Event>();

  @Input() public label = '';
  @Input() public type: ButtonType = ButtonType.Primary;
  @Input() public icon = 'pi pi-cog';
  @Input() public iconPos: Position = Position.Left;
  @Input() public size: ButtonSize = ButtonSize.Normal;
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
