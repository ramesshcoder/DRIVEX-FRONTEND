import { Injectable } from '@angular/core';
import { RestService } from '../../../core/Providers/rest-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private get _api(): string {
    return "cars"
  }
  constructor(private readonly _restService: RestService) {
  }

  public getCars(): Observable<ICarDto[]> {
    return this._restService.get(this._api)
  }

  public getCarByID(carID: number): Observable<ICarDto> {
    return this._restService.get(`${this._api}/${carID}`);
  }
}

export interface ICarDto {
  id: number;
  model: string;
  year: number;
  pricePerDay: number;
  transmission: string;
  fuelType: string;
  seats: number;
  imageUrl: string | null;
  isAvailable: boolean;
  brandId: number;
  brandName: string;
  brandDescription: string | null;
  categoryId: number;
  categoryName: string;
  categoryDescription: string | null;
}

export interface ICarRawDto {
  id: number;
  model: string;
  year: number;
  pricePerDay: number;
  transmission: string;
  fuelType: string;
  seats: number;
  imageUrl: string | null;
  isAvailable: boolean;
  brandId: number;
  brandName: string;
  brandDescription: string | null;
  categoryId: number;
  categoryName: string;
  categoryDescription: string | null;
}