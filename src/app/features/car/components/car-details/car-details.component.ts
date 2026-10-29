import { Component, OnInit } from '@angular/core';
import { CarService, ICarDto } from '../../Providers/car-service';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-details',
  standalone: false,
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
})
export class CarDetailsComponent implements OnInit {
  protected car!: ICarDto | null;
  protected carID!: number;

  constructor(private readonly _activerRoute: ActivatedRoute,
    private readonly _carService: CarService
  ) {
    this.carID = Number(this._activerRoute.snapshot.paramMap.get('id'));
  }

  public ngOnInit(): void {
    this._getCarByID();
  }


  private _getCarByID(): void {
    if (this.carID > 0) {
      this._carService.getCarByID(this.carID).pipe(
        tap((res: ICarDto) => {
          this.car = res;
        }),
        catchError((err: HttpErrorResponse) => {
          console.log(err, "some error occured while fetching car details");
          return EMPTY;
        })
      ).subscribe();
    }
  }
}
