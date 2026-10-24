import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layout/component/landing-page-component/landing-page-component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {
        path: '', loadChildren: () => import('./features/car/car-module').then(m => m.CarModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
