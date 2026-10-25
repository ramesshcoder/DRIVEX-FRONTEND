import { Component } from '@angular/core';
import { LoaderService } from '../../Providers/loader-service';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {

  protected loading$;

  constructor(
    private _loaderService: LoaderService
  ) {
    this.loading$ = this._loaderService.loading$

    this.loading$.subscribe(value => {
      console.log('LoaderComponent received:', value);
    });
  }

  testLoader(): void {
    console.log('Button clicked');
    this._loaderService.showLoader();
  }
}