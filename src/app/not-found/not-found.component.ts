import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button-component/button-component';
import { ButtonType } from '../shared/entities/entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: false,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  protected readonly ButtonType = ButtonType
  constructor(private readonly _router: Router) { }

  protected goHome(): void {
    this._router.navigate(['/']);
  }

  protected goToCars(): void {
    this._router.navigate(['/cars']);
  }
}
