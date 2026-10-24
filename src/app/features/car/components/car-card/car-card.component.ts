import { Component, Input } from '@angular/core';
import { ICarDto } from '../../Providers/car-service';

@Component({
  selector: 'app-car-card',
  standalone: false,
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {

  @Input() public car!: ICarDto
  constructor() { }

  
}
