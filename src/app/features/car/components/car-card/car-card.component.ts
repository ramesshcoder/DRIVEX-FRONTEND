import { Component, Input } from '@angular/core';
import { ICarDto } from '../../Providers/car-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  standalone: false,
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss',
})
export class CarCardComponent {

  @Input() public car!: ICarDto
  constructor(private readonly _router: Router) { }

  protected viewCarDetails(carID: number): void {
    this._router.navigate(['cars:id', carID]);
  }
}
