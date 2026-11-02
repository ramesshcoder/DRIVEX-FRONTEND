import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from './components/button-component/button-component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ButtonModule, InputTextModule,
    PasswordModule, ReactiveFormsModule],
  exports: [ButtonComponent, ReactiveFormsModule, InputTextModule, PasswordModule]
})
export class SharedModule { }
