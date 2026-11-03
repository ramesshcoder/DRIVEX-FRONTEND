
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../Providers/loader-service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private readonly _loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this._loaderService.showLoader();

    return next.handle(request).pipe(
      finalize(() => {
        this._loaderService.hideLoader();
      })
    );
  }
}
