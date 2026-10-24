import { Component } from '@angular/core';
import { ICarDto } from '../../Providers/car-service';

@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
})
export class CarDetailsComponent {
  protected car!: ICarDto ;

  constructor() { }
}
