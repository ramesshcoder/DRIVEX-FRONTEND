import { Component, OnInit } from '@angular/core';
import { CarService, ICarDto } from '../../Providers/car-service';
import { catchError, EMPTY, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cars-list',
  standalone: false,
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent implements OnInit {
  protected cars: ICarDto[] = [];

  constructor(private readonly _carsService: CarService) { }

  public ngOnInit(): void {
    this.getCars();
  }

  protected getCars(): void {
    this.cars = [];
    this._carsService.getCars().pipe(
      tap((res: ICarDto[]) => {
        this.cars = res;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error)
        return EMPTY
      })
    ).subscribe();
  }

}
