import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './button-component/button-component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports:[ButtonComponent]
})
export class SharedModule {}
