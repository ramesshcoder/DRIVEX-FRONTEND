import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private activeRequests = 0;
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);

  readonly loading$ = this.loadingSubject.asObservable();

  public showLoader(): void {

    this.activeRequests++;
    this.loadingSubject.next(true);
  }

  public hideLoader(): void {

    if (this.activeRequests > 0) {
      this.activeRequests--;
    }

    this.loadingSubject.next(this.activeRequests > 0);
  }

  
}
