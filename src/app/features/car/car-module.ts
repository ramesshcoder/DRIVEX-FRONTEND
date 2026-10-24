import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing-module';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    CarsListComponent,
    CarDetailsComponent,
    CarCardComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule
]
})
export class CarModule { }
