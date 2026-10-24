import { Component, Input } from '@angular/core';
import { Position } from '../../../shared/entities/entities';

@Component({
  selector: 'app-hero-component',
  standalone: false,
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent {
  @Input() public eyebrow = '';
  @Input() public title = '';
  @Input() public highlight = '';
  @Input() public description = '';
  @Input() public image = '';

  protected readonly Position = Position;

  constructor() { }
}
