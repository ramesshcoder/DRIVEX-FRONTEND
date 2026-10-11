import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  standalone: false,
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() highlight = '';
  @Input() description = '';
  @Input() image = '';
  @Input() primaryLabel = '';
  @Input() primaryLink = '/';
  @Input() secondaryLabel = '';
  @Input() secondaryLink = '/';
}
