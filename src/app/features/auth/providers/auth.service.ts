import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../../../core/Providers/rest-service';

@Injectable({
  providedIn: 'root',
})
export class Authservice {
  constructor(
    private readonly _restService: RestService
  ) { }

  private get _api(): string {
    return 'auth';
  }

  public signUp(request: ISignupRequestDto): Observable<number> {
    return this._restService.post(`${this._api}/sign-up`, request)
  }
}

export interface ISignupRequestDto {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  confirmPassword: string
}