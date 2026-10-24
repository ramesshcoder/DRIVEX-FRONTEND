
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  {
    path: '',
    component: CarsListComponent
  },
  {
    path: ':id',
    component: CarDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule {}
