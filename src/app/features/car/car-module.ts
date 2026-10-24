import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing-module';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarCardComponent } from './components/car-card/car-card.component';


@NgModule({
  declarations: [
    CarsListComponent,
    CarDetailsComponent,
    CarCardComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }
